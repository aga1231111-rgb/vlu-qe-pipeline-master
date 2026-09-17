const { login } = require("./auth");

test("login succeeds with correct credentials", () => {
    expect(login("admin", "9999")).toBe(true);
});
