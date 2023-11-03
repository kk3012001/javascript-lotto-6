// 파일명: Constants.js
// 역할: 상수를 관리

class Constants {
  #constants;

  constructor() {
    this.#constants = {
      lottoNumberCount: 6,
      lottoNumberMax: 45,
      lottoNumberMin: 1,
      lottoPrice: 1000,
      lottoPriceUnit: 1000,
    };
  }

  getLottoNumberCount() {
    return this.#constants.lottoNumberCount;
  }
}

// const constants = new Constants();
// console.log(constants.getlottoNumberCount());

export default Constants;
