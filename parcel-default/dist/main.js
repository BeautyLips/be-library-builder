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
var $67fde60292f59f18$exports = {}
var $576092bba83c24df$exports = {}

$parcel$export(
  $576092bba83c24df$exports,
  "summer",
  () => $576092bba83c24df$export$4d5aac9ab8326686,
)
function $576092bba83c24df$export$4d5aac9ab8326686(a, b) {
  return a + b
}

$parcel$exportWildcard($67fde60292f59f18$exports, $576092bba83c24df$exports)

$parcel$exportWildcard(module.exports, $67fde60292f59f18$exports)

//# sourceMappingURL=main.js.map
