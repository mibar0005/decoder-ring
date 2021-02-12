// Write your tests here!
const { expect } = require("chai");
const polybius = require('../src/polybius');

describe("polybius", () => {
    it("Should return a string", () => {
        const actual = polybius('');
        const expected = "";
        expect(actual).to.equal(expected);
    });

    it("should return if the char number is odd", () => {
        const actual = polybius("777", false);
        expect(actual).to.be.false;
    });

    it("should maintain proper spacing for decoding", () => {
        const actual = polybius("2345 44513444", false);
        const expected = 7;
        expect(actual.length).to.equal(expected);
    });

    it("should share (i/j) as 42", () => {
        const actual = polybius("234222545113", false);
        const expected = "m(i/j)guel";
        expect(actual).to.equal(expected);
    });

    it("encoding ignores capital letters", () => {
        const actual = polybius("USA");
        const expected = "543411";
        expect(actual).to.equal(expected);
    });

    it("encoding maintain proper spaing", () => {
        const actual = polybius("Bad dog");
        const expected = "211141 414322";
        expect(actual).to.equal(expected);
    });

});