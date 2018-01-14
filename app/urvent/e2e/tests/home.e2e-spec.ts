import {browser} from "protractor";
describe("Home page tests", () => {

  it("should open page", () => {
    browser.get('/');
  });
});
