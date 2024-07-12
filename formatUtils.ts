/**
 * 한국어 단위로 숫자를 포맷팅합니다. 경까지만 지원합니다.
 * ex) 1234567890 -> 123억 4567만 890원
 */
export function formatKoreanCurrency(amount: number) {
  if (amount === 0) return "0";

  const units = ["", "만", "억", "조", "경"];
  let result = "";
  let unitIndex = 0;

  while (amount > 0) {
    const currentUnitAmount = amount % 10000;

    if (currentUnitAmount > 0) {
      result = `${currentUnitAmount.toLocaleString()}${
        units[unitIndex]
      } ${result}`;
    }

    amount = Math.floor(amount / 10000);

    unitIndex++;

    if (unitIndex >= units.length) {
      throw new Error("The amount is too large to be formatted.");
    }
  }

  return result.trim();
}
