// Write your tests here!

//if shift is not a value return false 
//if shift  === 0 return false 
// if shift <-25 return flase 
//if shift > 25 return false 
const expect = require("chai").expect;
const caesar = require("../src/caesar.js").caesar
describe("caesar", () => {
    it('should return false if there is no shift, if shift is <= 25 return false, if shift > 25 return false', () => {
        let expected = false 
        let actual = caesar("test if shift is less than -25", -30);
        expect(actual).to.equal(expected);
        let actualOne = caesar("test if shift is greater than 25", 30);
        expect(actualOne).to.equal(expected);
        let actualTwo = caesar("test if there is no shift", 0);
        expect(actualTwo).to.equal(expected);

    });
    it("should ignore all caps", () => {
        let expected = false;
        let actualThree = caesar("Thinkful");
        expect(actualThree).to.equal(expected);

    });
    it("should wrap around to front of alphabet if it goes off", () => {
        let expected = 'c';
        let actualFour = caesar('z', 3);
        expect(actualFour).to.equal(expected);
    });
    it("should allow for a negative shift, shift to the left", () =>{
        let expected= 'qefkhcri';
        let actualFive = caesar('thinkful', -3);
        expect(actualFive).to.equal(expected);

    });
    it("should decode a message", () => {
        let expected = "thinkful";
        let actualSix = caesar("wklqnixo", 3, false);
        expect(actualSix).to.equal(expected);
    });

})
