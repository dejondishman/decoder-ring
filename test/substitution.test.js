const {substitution} = require("../src/substitution")
const {expect} = require("chai")
// Write your tests here!
describe("substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
        let expected = false
        let actual = substitution()
        expect(actual).to.equal(expected);
    })
    it("input should include spaces and letters as well as special characters", () => {
        let expected= 'elp xhm xf mbymwwmfj dne'
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
    it("should  ignore capial ltters", () => {
        let expected ='thinkful'
        let actual =substitution("Jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
    it("the alphabet param msut be a string of 26 charachters, can include special characters, otherwise return false", () => {
        let expected ="y&ii$r&"
        let actual =substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    })
    it("all characters in alphabet must be uniique, otherwise return flase", () => {
        let expected = false
        let actual =substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    })
}) 

