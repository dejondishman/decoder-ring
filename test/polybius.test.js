// Write your tests here!
//include spaces and letters 
//encoding should result in a string 
//when decoding the number of string should be even otherwise return false 
//caps can be ignored 
  //  input = input.toLowerCase()

const { expect } = require("chai");
const {polybius} = require("../src/polybius")

 describe("polybius" , () => {
    it(" should encode a message by translating each letter to number", () => {
        let expected = "4432423352125413"
        let actual= polybius("thinkful");
        expect(actual).to.equal(expected);
    });
    it("should leave spaces where they are", () => {
        let expected= '3251131343 2543241341'
        let actual= polybius("Hello World", true);
        expect(actual).to.equal(expected);
    });
    it("should translate (i/j) to 42", () => {
        let expected="th(i/j)nkful";
        let actual= polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });
    it("should ignore all cap letters", () => {
        let expected= "hello world"
        let actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });
    it("number of characters in string should be even not includng string and spaces", () => {
        let expected =false;
        let actual = polybius("44324233521254134", false);
        expect(actual).to.equal(expected);
    })

 }
 );