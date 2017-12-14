var assert = require("assert");
var MembershipApplication = require("../models/membership_application");

describe("Applying for mission", function () {
    var validApp;
    
    before(function () {
        // arrange the data here
        validApp = new MembershipApplication({
            first : "Test",
            last : "User",
            email : "test@test.com",
            age : 30,
            height : 66,
            weight : 180
        });
    });

    describe("Using valid email, first, last, height, age, weight", function () {
        it("is valid", function () {
            assert(validApp.isValid(), "Not valid");
        });
        it("reports a valid email");
        it("reports valid height");
        it("reports valid age");
        it("reports valid weight");
        it("reports valid name");
    })
});