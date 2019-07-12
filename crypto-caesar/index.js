module.exports = function caesar(caesarNum, value) {
  let res = '';

  for (let i = value.length - 1; i >= 0; i--) {
    let char = value.toUpperCase().charCodeAt(i);

    char += caesarNum;

    if (char < 65) {
      char = 90-(char-65+1);
    } else if (char > 90) {
      char = 65+(char-90-1);
    }

    res = String.fromCharCode(char) + res;
  }

  return res;
};
