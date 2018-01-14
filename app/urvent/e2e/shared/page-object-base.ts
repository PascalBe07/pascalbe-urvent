import {browser, element, by} from "protractor";
export abstract class PageObjectBase {

  protected subUrl: string = "";

  public navigateTo() {
    return browser.get(this.subUrl);
  }

  public getTitle() {
    return element(by.tagName("ion-title"));
  }
}
