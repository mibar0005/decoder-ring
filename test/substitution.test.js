// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution function", () => {
    it("should check if substitution is a function", () => {
        const actual = typeof(substitution);
        const expected = "function";
        expect(actual).to.equal(expected);
    });

    it("should encode a message and return it as a string", () => {
        const actual = substitution("thinkful", "plmoknijbuhvygctfxrdze$waq");
        const expected = "djbghnzv";
        expect(actual).to.equal(expected);
    });

    it("should include special characters and spaces", () => {
        const actual = substitution("encrypted arrow!", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'mfyhenjmq xhhli!';
        expect(actual).to.eql(expected);
    });

    it("should ignore capitalization of characters", () => {
        const actual = substitution("EnCrypTed ArROw!", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'mfyhenjmq xhhli!';
        expect(actual).to.eql(expected);
    });

    it("should be false if alphabet is < 26 characters", () => {
        const actual = substitution("Encrypted arrow!", "xoyqmcgrukswaflnthdjpzibe");
        expect(actual).to.be.false;
    });

    it("should correctly return the encrypted message", () => {
        const actual = substitution("Encrypted arrow!", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'mfyhenjmq xhhli!';
        expect(actual).to.eql(expected);
    });

    it("should return false if substitute alphabet is not unique", () => {
        const actual = substitution("message that won't display", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return the proper decoded message", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
})