export function arrayModified() {
  // Tu código aquí 👈
  array.prototype.myFilter = function (callback) {
    let filtered = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        filtered.push(this[i])
      }
    }
  }

  return filtered;
}