module.exports = { isValidNumber };

/**
 * @param, {string}  n
 * @return {Boolean}
 */

function isValidNumber(n) {
  var firstCharacter;
  var number;
  var regexPattern = /^([0]{1})([2-8]{1})([\d]{2})([\s]?)([\d]{6})$/g;

  if (!n || n.length < 5) return false;

  if (typeof n === "number") {
    // Numbers never begin with  0, force this to become a string

    number = "0" + n;
  } else if (typeof n === "string") {
    firstChar = n.substring(0, 1);

    //   Users may input a 0 before the number or not.
    //  Either way add the missing 0 at the start of the number

    number = firstChar === "0" ? n : "0" + n;
  } else {
    return false;
  }

  //   Remove all the white space before running the tests
  return regexPattern.match(number.replace(/\s+/g, ""));
}
