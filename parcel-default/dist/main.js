
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0d284e0ee5f4db3c$exports = {};
var $85a79c3b6bed524f$exports = {};

$parcel$export($85a79c3b6bed524f$exports, "summer", () => $85a79c3b6bed524f$export$4d5aac9ab8326686);
function $85a79c3b6bed524f$export$4d5aac9ab8326686(a, b) {
    return a + b;
}
console.log($85a79c3b6bed524f$export$4d5aac9ab8326686(2, 2));


$parcel$exportWildcard($0d284e0ee5f4db3c$exports, $85a79c3b6bed524f$exports);


$parcel$exportWildcard(module.exports, $0d284e0ee5f4db3c$exports);


//# sourceMappingURL=main.js.map
