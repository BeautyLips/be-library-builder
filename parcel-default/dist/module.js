
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
var $5a172b8dbb87f889$exports = {};
var $e5dfc6a1eb038f6e$exports = {};

$parcel$export($e5dfc6a1eb038f6e$exports, "summer", () => $e5dfc6a1eb038f6e$export$4d5aac9ab8326686);
function $e5dfc6a1eb038f6e$export$4d5aac9ab8326686(a, b) {
    return a + b;
}
console.log($e5dfc6a1eb038f6e$export$4d5aac9ab8326686(2, 2));


$parcel$exportWildcard($5a172b8dbb87f889$exports, $e5dfc6a1eb038f6e$exports);




export {$e5dfc6a1eb038f6e$export$4d5aac9ab8326686 as summer};
//# sourceMappingURL=module.js.map
