import Messages from "../utils/Messages.js";
import Constants from "../utils/Constants.js";

class BonusLotto {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  async setNumber(number) {
    this.#validate(number);
    this.#number = number;
  }

  async getNumber() {
    return this.#number;
  }

  async #validate(bonusNumber) {
    const messages = new Messages();
    if (numbers.some((num) => this.#checkArange(num))) {
      throw new Error(messages.getErrorMsg("outOfindex"));
    }
    if (typeof bonusNumber !== "number") {
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

export default BonusLotto;
