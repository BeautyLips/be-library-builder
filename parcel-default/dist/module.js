function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function (key) {
    if (
      key === "default" ||
      key === "__esModule" ||
      Object.prototype.hasOwnProperty.call(dest, key)
    ) {
      return
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key]
      },
    })
  })

  return dest
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true,
  })
}
var $b303505768f2368e$exports = {}
var $0cc1ecd7621b32f8$exports = {}

$parcel$export(
  $0cc1ecd7621b32f8$exports,
  "summer",
  () => $0cc1ecd7621b32f8$export$4d5aac9ab8326686,
)
function $0cc1ecd7621b32f8$export$4d5aac9ab8326686(a, b) {
  return a + b
}

$parcel$exportWildcard($b303505768f2368e$exports, $0cc1ecd7621b32f8$exports)

export { $0cc1ecd7621b32f8$export$4d5aac9ab8326686 as summer }
//# sourceMappingURL=module.js.map
