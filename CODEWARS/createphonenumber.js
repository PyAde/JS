/** @format */

function createPhoneNumber(numbers) {
  const number = [...numbers];
  const number_phone = `(${number.slice(0, 3).join("")}) ${number
    .slice(3, 6)
    .join("")}-${number.slice(6).join("")}`;
  return number_phone;
}
