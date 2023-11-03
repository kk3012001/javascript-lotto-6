import Messages from "../utils/Messages.js";
import Constants from "../utils/Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async setNumbers(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    const messages = new Messages();
    const constants = new Constants();
    if (numbers.length !== constants.getLottoNumberCount()) {
      throw new Error(messages.getErrorMsg("notLength"));
    }
    if (numbers.some((num) => this.#checkArange(num))) {
      throw new Error(messages.getErrorMsg("outOfindex"));
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(messages.getErrorMsg("overlap"));
    }
    if (numbers.some((number) => typeof number !== "number")) {
      throw new Error(messages.getErrorMsg("notNumber"));
    }
    // 보너스 번호와 당첨 번호가 중복되는 경우는 controller에서 처리
  }

  #checkArange(number) {
    const constants = new Constants();
    return (number) =>
      number < constants.getLottoNumberMin() ||
      number > constants.getLottoNumberMax();
  }
}

export default Lotto;
