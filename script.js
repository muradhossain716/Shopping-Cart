'use strict';
// const subTotalValueId = document.getElementById('subtotal-value');
// const taxId = document.getElementById('tax');
// const totalValueId = document.getElementById('total-value');

// const phnBtnMinusId = document.getElementById('btn-minus');
// const PhnBtnPlusId = document.getElementById('btn-plus');
// const noOfPhnID = document.getElementById('no-of-phone');
// const phoneSubTotalId = document.getElementById('phone-total-value');
// const caseBtnMinusId = document.getElementById('case-btn-minus');
// const caseBtnPlusId = document.getElementById('case-btn-plus');
// const caseTotalId = document.getElementById('case-total-value');
// const noOfCaseID = document.getElementById('no-of-case');
// function calSubValue(value, number, numberId, valueId) {
//   let subValue = value * number;
//   numberId.value = number;
//   valueId.textContent = subValue;
//   return subValue;
// }
// let numberOfPhone = 1,
//   phoneValue = 1219,
//   noOfCase = 1,
//   caseValue = 59,
//   totalCaseValue = 0,
//   phnTotalValue = 1219,
//   caseTotalValue = 59,
//   subTotalValue = 1278,
//   tax = 0,
//   totalValue = 1278;
// function calTotalValue() {
//   subTotalValue = phnTotalValue + totalCaseValue;
//   subTotalValueId.textContent = subTotalValue;
//   //tax = subTotalValue * 0.05;
//   tax = 0;
//   //taxId.textContent = tax;
//   totalValue = subTotalValue + tax;
//   totalValueId.textContent = totalValue;
// }

// phnBtnMinusId.addEventListener('click', function () {
//   if (numberOfPhone != 0) {
//     numberOfPhone--;
//     // noOfPhnID.value = numberOfPhone;
//   }
//   phnTotalValue = calSubValue(
//     phoneValue,
//     numberOfPhone,
//     noOfPhnID,
//     phoneSubTotalId
//   );
//   //phnTotalValue = phoneVAlue * numberOfPhone;
//   //phoneSubTotalId.textContent = phnTotalValue;
//   calTotalValue();
// });
// PhnBtnPlusId.addEventListener('click', function () {
//   numberOfPhone++;
//   // noOfPhnID.value = numberOfPhone;
//   phnTotalValue = calSubValue(
//     phoneValue,
//     numberOfPhone,
//     noOfPhnID,
//     phoneSubTotalId
//   );

//   //phnTotalValue = phoneVAlue * numberOfPhone;
//   //phoneSubTotalId.textContent = phnTotalValue;
//   calTotalValue();
// });

// caseBtnMinusId.addEventListener('click', function () {
//   if (noOfCase != 0) {
//     noOfCase--;
//     //noOfCaseID.value = noOfCase;
//   }
//   totalCaseValue = calSubValue(caseValue, noOfCase, noOfCaseID, caseTotalId);
//   calTotalValue();
// });
// caseBtnPlusId.addEventListener('click', function () {
//   noOfCase++;
//   //noOfCaseID.value = noOfCase;
//   totalCaseValue = calSubValue(caseValue, noOfCase, noOfCaseID, caseTotalId);
//   calTotalValue();
// });

// //checkin variable writing in string
// // let a = 20;
// // document.getElementById('abc').textContent = `$ ${a}`;
function getInputValue(product) {
  return Number(document.getElementById(product + '-total-value').textContent);
}
function totalValue() {
  let phoneTotal = getInputValue('phone');

  //console.log('phoneTotal', phoneTotal);
  let caseTotal = getInputValue('case');
  //console.log('caseTotal', caseTotal);
  let subTotalValue = phoneTotal + caseTotal;
  document.getElementById('subtotal-value').textContent = subTotalValue;
  let tax = subTotalValue * 0.05;
  document.getElementById('tax').textContent = tax;
  document.getElementById('total-value').textContent = subTotalValue + tax;
}
function productChange(
  productInputId,
  productTotalId,
  isDecrease,
  productValuePerPiece
) {
  let productInput = document.getElementById(productInputId);
  let productTotalValueId = document.getElementById(productTotalId);
  let productCount = Number(productInput.value);
  let productNewCount = productCount;
  if (isDecrease && productCount > 0) productNewCount--;
  else if (!isDecrease) productNewCount++;
  productInput.value = productNewCount;
  let productTotalValue = productNewCount * productValuePerPiece;
  //console.log(productTotalValue);
  productTotalValueId.textContent = productTotalValue;
  totalValue();
}

document.getElementById('phn-btn-minus').addEventListener('click', function () {
  productChange('no-of-phone', 'phone-total-value', true, 1219);
});
document.getElementById('phn-btn-plus').addEventListener('click', function () {
  productChange('no-of-phone', 'phone-total-value', false, 1219);
});
document
  .getElementById('case-btn-minus')
  .addEventListener('click', function () {
    productChange('no-of-case', 'case-total-value', true, 59);
  });
document.getElementById('case-btn-plus').addEventListener('click', function () {
  productChange('no-of-case', 'case-total-value', false, 59);
});
