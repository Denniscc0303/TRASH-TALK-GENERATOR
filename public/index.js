// 記憶使用者勾選項目
const checkedItem = document.querySelector('.option-record').dataset.record
if (checkedItem) {
  document.querySelector(`.card input[value="${checkedItem}"]`).checked = true
}