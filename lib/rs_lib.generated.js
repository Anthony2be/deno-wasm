// @generated file from wasmbuild -- do not edit
// deno-lint-ignore-file
// deno-fmt-ignore-file
// source-hash: 33fc69e3c30009f3a4104b183f5a4bc298ad669a
let wasm;
let cachedInt32Memory0;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) {
  return heap[idx];
}

let heap_next = heap.length;

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];

  heap[idx] = obj;
  return idx;
}

const cachedTextDecoder = new TextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true,
});

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  const ret = wasm.add(a, b);
  return ret;
}

/** */
export function run() {
  wasm.run();
}

function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}

function isLikeNone(x) {
  return x === undefined || x === null;
}

const imports = {
  __wbindgen_placeholder__: {
    __wbindgen_object_drop_ref: function (arg0) {
      takeObject(arg0);
    },
    __wbg_instanceof_Window_acc97ff9f5d2c7b4: function (arg0) {
      let result;
      try {
        result = getObject(arg0) instanceof Window;
      } catch {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_settextContent_538ceb17614272d8: function (arg0, arg1, arg2) {
      getObject(arg0).textContent = arg1 === 0
        ? undefined
        : getStringFromWasm0(arg1, arg2);
    },
    __wbg_appendChild_e513ef0e5098dfdd: function () {
      return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).appendChild(getObject(arg1));
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_document_3ead31dbcad65886: function (arg0) {
      const ret = getObject(arg0).document;
      return isLikeNone(ret) ? 0 : addHeapObject(ret);
    },
    __wbg_setid_d6ea60ebd257fe07: function (arg0, arg1, arg2) {
      getObject(arg0).id = getStringFromWasm0(arg1, arg2);
    },
    __wbg_body_3cb4b4042b9a632b: function (arg0) {
      const ret = getObject(arg0).body;
      return isLikeNone(ret) ? 0 : addHeapObject(ret);
    },
    __wbg_createElement_976dbb84fe1661b5: function () {
      return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).createElement(
          getStringFromWasm0(arg1, arg2),
        );
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_newnoargs_b5b063fc6c2f0376: function (arg0, arg1) {
      const ret = new Function(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    },
    __wbg_call_97ae9d8645dc388b: function () {
      return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
      }, arguments);
    },
    __wbindgen_object_clone_ref: function (arg0) {
      const ret = getObject(arg0);
      return addHeapObject(ret);
    },
    __wbg_self_6d479506f72c6a71: function () {
      return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_window_f2557cc78490aceb: function () {
      return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_globalThis_7f206bda628d5286: function () {
      return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_global_ba75c50d1cf384f4: function () {
      return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
      }, arguments);
    },
    __wbindgen_is_undefined: function (arg0) {
      const ret = getObject(arg0) === undefined;
      return ret;
    },
    __wbindgen_throw: function (arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbindgen_rethrow: function (arg0) {
      throw takeObject(arg0);
    },
  },
};

/**
 * Decompression callback
 *
 * @callback DecompressCallback
 * @param {Uint8Array} compressed
 * @return {Uint8Array} decompressed
 */

/**
 * Options for instantiating a Wasm instance.
 * @typedef {Object} InstantiateOptions
 * @property {URL=} url - Optional url to the Wasm file to instantiate.
 * @property {DecompressCallback=} decompress - Callback to decompress the
 * raw Wasm file bytes before instantiating.
 */

/** Instantiates an instance of the Wasm module returning its functions.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @param {InstantiateOptions=} opts
 */
export async function instantiate(opts) {
  return (await instantiateWithInstance(opts)).exports;
}

let instanceWithExports;
let lastLoadPromise;

/** Instantiates an instance of the Wasm module along with its exports.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @param {InstantiateOptions=} opts
 * @returns {Promise<{
 *   instance: WebAssembly.Instance;
 *   exports: { add: typeof add; run: typeof run }
 * }>}
 */
export function instantiateWithInstance(opts) {
  if (instanceWithExports != null) {
    return Promise.resolve(instanceWithExports);
  }
  if (lastLoadPromise == null) {
    lastLoadPromise = (async () => {
      try {
        const instance = (await instantiateModule(opts ?? {})).instance;
        wasm = instance.exports;
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        instanceWithExports = {
          instance,
          exports: getWasmInstanceExports(),
        };
        return instanceWithExports;
      } finally {
        lastLoadPromise = null;
      }
    })();
  }
  return lastLoadPromise;
}

function getWasmInstanceExports() {
  return { add, run };
}

/** Gets if the Wasm module has been instantiated. */
export function isInstantiated() {
  return instanceWithExports != null;
}

/**
 * @param {InstantiateOptions} opts
 */
async function instantiateModule(opts) {
  const wasmUrl = opts.url ?? new URL("rs_lib_bg.wasm", import.meta.url);
  const decompress = opts.decompress;
  const isFile = wasmUrl.protocol === "file:";

  // make file urls work in Node via dnt
  const isNode = globalThis.process?.versions?.node != null;
  if (isNode && isFile) {
    // the deno global will be shimmed by dnt
    const wasmCode = await Deno.readFile(wasmUrl);
    return WebAssembly.instantiate(
      decompress ? decompress(wasmCode) : wasmCode,
      imports,
    );
  }

  switch (wasmUrl.protocol) {
    case "file:":
    case "https:":
    case "http:": {
      if (isFile) {
        if (typeof Deno !== "object") {
          throw new Error("file urls are not supported in this environment");
        }
        if ("permissions" in Deno) {
          await Deno.permissions.request({ name: "read", path: wasmUrl });
        }
      } else if (typeof Deno === "object" && "permissions" in Deno) {
        await Deno.permissions.request({ name: "net", host: wasmUrl.host });
      }
      const wasmResponse = await fetch(wasmUrl);
      if (decompress) {
        const wasmCode = new Uint8Array(await wasmResponse.arrayBuffer());
        return WebAssembly.instantiate(decompress(wasmCode), imports);
      }
      if (
        isFile ||
        wasmResponse.headers.get("content-type")?.toLowerCase()
          .startsWith("application/wasm")
      ) {
        return WebAssembly.instantiateStreaming(wasmResponse, imports);
      } else {
        return WebAssembly.instantiate(
          await wasmResponse.arrayBuffer(),
          imports,
        );
      }
    }
    default:
      throw new Error(`Unsupported protocol: ${wasmUrl.protocol}`);
  }
}
