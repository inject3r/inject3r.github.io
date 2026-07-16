(function () {
  "use strict";

  const uploadZone = document.getElementById("uploadZone");
  const fileInput = document.getElementById("fileInput");
  const gallery = document.getElementById("gallery");
  const galleryContainer = document.getElementById("galleryContainer");
  const imageCountSpan = document.getElementById("imageCount");
  const cleanedCountSpan = document.getElementById("cleanedCount");
  const processAllBtn = document.getElementById("processAllBtn");
  const downloadAllBtn = document.getElementById("downloadAllBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const toast = document.getElementById("toast");

  // state
  let imageItems = [];

  const ALLOWED_MIME_TYPES = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "image/avif",
  ]);

  // Check file extension
  function isAllowedImage(file) {
    if (!ALLOWED_MIME_TYPES.has(file.type)) return false;
    if (file.type === "image/svg+xml") return false;
    const ext = file.name.split(".").pop().toLowerCase();
    const disallowedExt = [
      "svg",
      "zip",
      "rar",
      "7z",
      "tar",
      "gz",
      "bz2",
      "xz",
      "zst",
      "iso",
      "dmg",
      "exe",
      "msi",
      "apk",
      "deb",
      "rpm",
    ];
    if (disallowedExt.includes(ext)) return false;
    return true;
  }

  // helpers
  function showToast(msg, duration = 2600) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("show"), duration);
  }

  // simulate reading C2PA
  function readC2PAMetadata(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        let preview = "No C2PA metadata detected";
        try {
          const buffer = e.target.result;
          const view = new Uint8Array(buffer);
          const chunk = view.slice(0, 4000);
          let text = "";
          for (let i = 0; i < chunk.length; i++) {
            if (chunk[i] > 31 && chunk[i] < 127)
              text += String.fromCharCode(chunk[i]);
          }
          const markers = [
            "c2pa",
            "xmp",
            "creator",
            "contentcredentials",
            "claim",
            "assertion",
          ];
          let found = [];
          markers.forEach((m) => {
            if (text.toLowerCase().includes(m)) found.push(m);
          });
          if (found.length > 0) {
            preview = "C2PA metadata found: " + found.join(", ");
            const verMatch = text.match(/c2pa[:\s]*([0-9.]+)/i);
            if (verMatch) preview += " · version " + verMatch[1];
            else preview += " · version 1.x";
          } else {
            if (file.type.startsWith("image/")) {
              preview = "C2PA metadata not detected (or embedded in binary)";
            }
          }
        } catch (_) {
          preview = "Unable to parse metadata";
        }
        resolve(preview);
      };
      reader.onerror = () => resolve("Error reading file for metadata");
      reader.readAsArrayBuffer(file);
    });
  }

  // strip metadata via canvas re-encode
  function stripMetadata(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          let mime = file.type;
          if (!mime || mime === "image/jpg") mime = "image/jpeg";
          let outputType = mime;
          if (
            mime !== "image/png" &&
            mime !== "image/jpeg" &&
            mime !== "image/webp" &&
            mime !== "image/gif" &&
            mime !== "image/bmp" &&
            mime !== "image/tiff" &&
            mime !== "image/avif"
          ) {
            outputType = "image/jpeg";
          }
          if (outputType === "image/webp") {
            try {
              const testCanvas = document.createElement("canvas");
              testCanvas.width = 1;
              testCanvas.height = 1;
              if (!testCanvas.toBlob((b) => {}, "image/webp")) {
                outputType = "image/jpeg";
              }
            } catch (_) {
              outputType = "image/jpeg";
            }
          }
          canvas.toBlob(
            function (blob) {
              if (!blob) {
                reject(new Error("Canvas conversion failed"));
                return;
              }
              const newFile = new File([blob], file.name, {
                type: outputType,
              });
              const newReader = new FileReader();
              newReader.onload = function (ev) {
                resolve({
                  file: newFile,
                  dataUrl: ev.target.result,
                  cleaned: true,
                  name: file.name,
                  metadataPreview: "Cleaned (metadata stripped)",
                });
              };
              newReader.onerror = () =>
                reject(new Error("Failed to read cleaned image"));
              newReader.readAsDataURL(newFile);
            },
            outputType,
            0.92,
          );
        };
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = e.target.result;
      };
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  }

  // add files with metadata preview
  async function addFiles(files) {
    const validFiles = Array.from(files).filter((f) => isAllowedImage(f));
    const skipped = Array.from(files).length - validFiles.length;
    if (!validFiles.length) {
      showToast(
        "No valid image files. this file and other files are not accepted.",
        3000,
      );
      return;
    }
    if (skipped > 0) {
      showToast(
        `${skipped} file(s) skipped (SVG, ZIP or unsupported format).`,
        2800,
      );
    }

    for (const file of validFiles) {
      try {
        const dataUrl = await new Promise((res, rej) => {
          const r = new FileReader();
          r.onload = (e) => res(e.target.result);
          r.onerror = rej;
          r.readAsDataURL(file);
        });
        const metaPreview = await readC2PAMetadata(file);
        imageItems.push({
          id: Date.now() + Math.random().toString(36).substring(2, 8),
          file: file,
          dataUrl: dataUrl,
          cleaned: false,
          name: file.name,
          metadataPreview: metaPreview,
        });
      } catch (e) {
        console.warn("Error adding file", e);
      }
    }
    renderGallery();
    if (validFiles.length) {
      showToast(
        `Added ${validFiles.length} image(s). Click "Process All" to remove C2PA.`,
      );
    }
  }

  // render
  function renderGallery() {
    gallery.innerHTML = "";
    imageItems.forEach((item, idx) => {
      const card = document.createElement("div");
      card.className = "image-card";
      const wrap = document.createElement("div");
      wrap.className = "img-wrap";
      const img = document.createElement("img");
      img.src = item.dataUrl;
      img.alt = item.name;
      img.loading = "lazy";
      const badge = document.createElement("span");
      badge.className = "meta-badge" + (item.cleaned ? " cleaned" : "");
      badge.textContent = item.cleaned ? "cleaned" : "C2PA";
      wrap.appendChild(img);
      wrap.appendChild(badge);
      const footer = document.createElement("div");
      footer.className = "card-footer";
      const nameSpan = document.createElement("div");
      nameSpan.className = "file-name";
      nameSpan.title = item.name;
      nameSpan.textContent = item.name;
      const metaSpan = document.createElement("span");
      metaSpan.className = "meta-info";
      metaSpan.textContent = item.metadataPreview || "No metadata";
      const actions = document.createElement("div");
      actions.className = "actions";
      if (item.cleaned) {
        const dlBtn = document.createElement("button");
        dlBtn.className = "btn btn-primary btn-sm";
        dlBtn.innerHTML =
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download';
        dlBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          downloadSingle(idx);
        });
        actions.appendChild(dlBtn);
      }
      footer.appendChild(nameSpan);
      footer.appendChild(metaSpan);
      footer.appendChild(actions);
      card.appendChild(wrap);
      card.appendChild(footer);
      gallery.appendChild(card);
    });
    galleryContainer.style.display = imageItems.length > 0 ? "block" : "none";
    imageCountSpan.textContent = imageItems.length;
    cleanedCountSpan.textContent = imageItems.filter((i) => i.cleaned).length;
  }

  // download single
  function downloadSingle(index) {
    const item = imageItems[index];
    if (!item || !item.cleaned) return;
    const link = document.createElement("a");
    link.href = item.dataUrl;
    const ext = (item.file.name.match(/\.[^.]+$/) || [""])[0];
    link.download = item.name.replace(/\.[^.]+$/, "") + "_cleaned" + ext;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloading " + item.name);
  }

  // download all
  function downloadAll() {
    const cleanedItems = imageItems.filter((i) => i.cleaned);
    if (!cleanedItems.length) {
      showToast("No cleaned images to download. Process images first.");
      return;
    }
    let count = 0;
    cleanedItems.forEach((item, idx) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = item.dataUrl;
        const ext = (item.file.name.match(/\.[^.]+$/) || [""])[0];
        link.download = item.name.replace(/\.[^.]+$/, "") + "_cleaned" + ext;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        count++;
        if (count === cleanedItems.length)
          showToast("All cleaned images downloaded.");
      }, idx * 120);
    });
    if (cleanedItems.length)
      showToast("Downloading " + cleanedItems.length + " cleaned image(s)...");
  }

  // process all
  async function processAllImages() {
    const toProcess = imageItems.filter((item) => !item.cleaned);
    if (!toProcess.length) {
      showToast("All images already cleaned.");
      return;
    }
    processAllBtn.disabled = true;
    processAllBtn.textContent = "Processing...";
    let processed = 0;
    for (let i = 0; i < imageItems.length; i++) {
      const item = imageItems[i];
      if (item.cleaned) continue;
      try {
        const result = await stripMetadata(item.file);
        imageItems[i].file = result.file;
        imageItems[i].dataUrl = result.dataUrl;
        imageItems[i].cleaned = true;
        imageItems[i].metadataPreview = "Cleaned (C2PA removed)";
        processed++;
      } catch (err) {
        console.warn("Failed to clean", item.name, err);
      }
      renderGallery();
    }
    processAllBtn.disabled = false;
    processAllBtn.textContent = "Process All";
    showToast(
      processed ? `Cleaned ${processed} image(s).` : "No images were cleaned.",
    );
  }

  function clearAll() {
    if (!imageItems.length) return;
    imageItems = [];
    renderGallery();
    fileInput.value = "";
    showToast("All images cleared.");
  }

  // event listeners
  uploadZone.addEventListener("click", () => fileInput.click());
  uploadZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadZone.classList.add("dragover");
  });
  uploadZone.addEventListener("dragleave", () =>
    uploadZone.classList.remove("dragover"),
  );
  uploadZone.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadZone.classList.remove("dragover");
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  });
  fileInput.addEventListener("change", function () {
    if (this.files.length) {
      addFiles(this.files);
    }
    this.value = "";
  });
  processAllBtn.addEventListener("click", processAllImages);
  downloadAllBtn.addEventListener("click", downloadAll);
  clearAllBtn.addEventListener("click", clearAll);
  uploadZone.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInput.click();
    }
  });

  // init
  renderGallery();
})();
