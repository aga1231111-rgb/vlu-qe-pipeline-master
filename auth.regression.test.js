const { login } = require("./auth");

describe("Login Regression Tests", () => {

    test("rejects wrong password", () => {
        expect(login("admin", "wrong")).toBe(false);
    });

    test("rejects empty username", () => {
        expect(login("", "123")).toBe(false);
    });

    test("rejects unknown username", () => {
        expect(login("user123", "123")).toBe(false);
    });

    test("rejects special characters in password", () => {
        expect(login("admin", "@#$%^&")).toBe(false);
    });

    test("rejects locked account", () => {
        expect(login("locked", "123")).toBe(false);
    });

    test("accepts correct credentials", () => {
        expect(login("admin", "123")).toBe(true);
    });

});
