"use strict ";

var assert = require("assert");

var ugandanNumber = require("./index.js");

var prefixes = {
  MTN: ["078", "077", "039", "080"],
  Airtel: ["070", "075", "020"],
  UTL: ["071"],
  LycaMobile: ["072"],
  Africell: ["079"],
};

var suffix = "1234567";

describe("Test numbers", function () {
  describe("Network providers", function () {
    it("should return false for unknown providers", function () {
      assert.equal(false, ugandanNumber.isValidNumber("0123456789"));
    });

    it("MTN Numbers", function () {
      var result = prefixes.MTN.map(function (prefix) {
        return ugandanNumber.isValidNumber(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it("Airtel numbers", function () {
      var result = prefixes.Airtel.map(function (prefix) {
        return ugandanNumber.isValidNumber(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it("UTL number", function () {
      var result = prefixes.UTL.map(function (prefix) {
        return ugandanNumber.isValidNumber(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });
    it("LycaMobile Numbers", function () {
      var result = prefixes.LycaMobile.map(function (prefix) {
        return ugandanNumber.isValidNumber(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });

    it("Africell Numbers", function () {
      var result = prefixes.Africell.map(function (prefix) {
        var result = ugandanNumber.isValidNumber(prefix + suffix);
      });
      assert.equal(-1, result.indexOf(false));
    });
  });

  describe("Length of digits", () => {
    it("should return true for ten numbers", () => {
      assert.equal(true, ugandanNumber.isValidNumber("0701234567"));
    });

    it("should return false for numbers greater that 10 numbers", function () {
      assert.equal(false, ugandanNumber.isValidNumber("077232436732"));
    });

    it("should return false for numbers less than 10 numbers", function () {
      assert.equal(false, ugandanNumber.isValidNumber("07123245"));
    });
  });

  describe("Argument data types", () => {
    it("should return false for objects ", function () {
      assert.equal(false, ugandanNumber.isValidNumber({}));
    });

    it("should return false for arrays ", function () {
      assert.equal(false, ugandanNumber.isValidNumber([1, 2, 3]));
    });
    it("should return false for null or false", function () {
      assert.equal(false, ugandanNumber.isValidNumber(null));
    });
    it("should return false for empty string", function () {
      assert.equal(false, ugandanNumber.isValidNumber(""));
    });
    it("should return false for empty args", function () {
      assert.equal(false, ugandanNumber.isValidNumber());
    });
    it("should return false for non integers or alpha-numerics", function () {
      assert.equal(false, ugandanNumber.isValidNumber("07023ed4-5"));
    });
  });
});
