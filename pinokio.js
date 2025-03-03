const path = require('path')
module.exports = {
  version: "3.6",
  title: "HunyuanVideo",
  description: "[NVIDIA ONLY] Super Optimized Gradio UI for Wan2.1 video for GPU poor machines. Generate up to 10 sec videos https://github.com/deepbeepmeep/Wan2GP",
  icon: "icon.jpg",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "<div><strong>Fast</strong><br><div>fast but lower quality</div></div>",
          href: "start.js",
          params: {
            profile: 4,
            fast: true
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "<div><strong>Original</strong><br><div>slow but high quality</div></div>",
          href: "start.js",
          params: {
            profile: 4
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "advanced",
          menu: [{
            icon: "fa-solid fa-power-off",
            text: "<div><strong>Fast Compiled</strong><br><div>fast & compiled. faster than 'Fast', but might not work on all platforms</div></div>",
            href: "start.js",
            params: {
              profile: 4,
              fast: true,
              compile: true
            }
          }, {
            icon: "fa-solid fa-power-off",
            text: "<div><strong>Original Compiled</strong><br><div>origina & compiled. faster than 'Original', but might now work on all platforms.</div></div>",
            href: "start.js",
            params: {
              profile: 4,
              compile: true
            }
          }]
        }, {
          icon: "fa-regular fa-folder-open",
          text: "T2V Loras (save lora files here)",
          href: "app/loras",
          fs: true
        }, {
          icon: "fa-regular fa-folder-open",
          text: "I2V Loras (save lora files here)",
          href: "app/loras_i2v",
          fs: true
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
