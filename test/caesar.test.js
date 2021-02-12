const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar function", () => {
    it("should return false if shift equals 0", () => {
        const actual = caesar('Jackalope', 0);
        expect(actual).to.be.false;
    });

    it("should return false if shift > 25", () => {
        const actual = caesar('Jackalope', 26);
        expect(actual).to.be.false;
    });

    it("should return false if shift < -25", () => {
        const actual = caesar('Jackalope', -26);
        expect(actual).to.be.false;
    });

    it("should return false if no shift value given", () => {
        const actual = caesar('Jackalope');
        expect(actual).to.be.false;
    });

    it("should maintain proper spacing", () => {
        const actual = caesar("Jackalope is awesome", 2);
        const expected = 20;
        expect(actual.length).to.equal(expected);
    });

     it("should ignore capital letters", () => {
         const actual = caesar("ShMiGuEl", 2);
         const expected = "ujokiwgn";
         expect(actual).to.equal(expected);
     });

    it("letters should wrap if shifted off the alphabet below a", () => {
         const actual = caesar("m", -4);
         const expected = "i";
         expect(actual).to.equal(expected);
     });

     it("letters should wrap if shifted off the alphabet above z", () => {
        const actual = caesar("zebra", 7);
        const expected = "gliyh";
        expect(actual).to.equal(expected);
    });

     it("letters should convert the letter appropriate to shift", () => {
        const actual = caesar("mno", 2);
        const expected = "opq";
        expect(actual).to.equal(expected);
    });

    it("should be able to decode", () => {
        const actual = caesar("wxy", 2, false);
        const expected = "uvw";
        expect(actual).to.equal(expected)
    });

    it("shouldn't change non-letters", () => {
        const actual = caesar("h-a", 2)
        const expected = "j-c";
        expect(actual).to.equal(expected);
    })

});