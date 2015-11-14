function Anagram(anagram) {
  this.anagram = anagram;
}

Anagram.prototype.matches = function() {

  var anagram = [];
  var arrAtI, arr, lowerAnagram = "";

  typeof(arguments[0]) === "string" ? arr = arguments : arr = arguments[0];

  for (var i=0; i<arr.length; i++) {
    arrAtI = arr[i].toLowerCase();
    lowerAnagram = this.anagram.toLowerCase();

    if (arrAtI !== lowerAnagram) {
      if (arrAtI.split("").sort().join("") === lowerAnagram.split("").sort().join("")) {
        anagram.push(arr[i]);
      }
    }
  }
  return anagram;
};

function anagram(ans) {
  return new Anagram(ans);
}

module.exports = anagram;
