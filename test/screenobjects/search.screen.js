import { $ } from "@wdio/globals";

class SearchScreen {
  get ingridRunningJacket() {
    return $("id:Tênis Esportivo R$ 150 R$ 199.99");
  }

  get addToCart() {
    return $("id:addToCart");
  }

  async selectProductAndAddToCart() {
    await this.ingridRunningJacket.click();
    await this.addToCart.click();
  }
}

export default new SearchScreen();