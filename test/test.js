

var minbox = require("./../index.js");

var mocha = require("mocha");
var chai = require("chai");




//description du test suite (le sujet du test)
mocha.describe("minbox",function () {
    
    //description du test  case (le cas du test)
//    mocha.it("Emergency is a function", function() {
//        chai.assert("function" === typeof minbox.emergency);
//    });
    
    mocha.it("minbox is a module", function() {
        chai.assert("object" === typeof minbox);
        
    });
    mocha.describe("Methods", function () {
        mocha.it("Emergency is a function", function() {
        chai.assert("function" === typeof minbox.emergency);
        
        });
        mocha.it("Alert", function() {
            chai.assert("function" === typeof minbox.alert);
        });
        mocha.it("Error", function() {
            chai.assert("function" === typeof minbox.error);
        });
        mocha.it("Warning", function() {
            chai.assert("function" === typeof minbox.warning);
        });
        mocha.it("Notice", function() {
            chai.assert("function" === typeof minbox.notice);
        });
        mocha.it("Info", function() {
            chai.assert("function" === typeof minbox.info);
        });
        mocha.it("Debug", function() {
            chai.assert("function" === typeof minbox.debug);
        });
    
    });
      
});
