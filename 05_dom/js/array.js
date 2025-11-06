// array.js
console.log(products);
// 상품코드, 상품명, 카테고리 콘솔에 출력(카테고리 사무용품)
products.forEach((elem) => {
  if (elem.category == "사무용품")
    console.log(elem.productCode, elem.productName, elem.category);
});

// 상품명에 노트북 포함
products.forEach((elem) => {
  if (elem.productName.includes("노트북")) console.log(elem.productName);
});

const categories = [];
for (let product of products) {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
}
console.log(categories);

const priceOver50000 = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].purchasePrice >= 50000) {
    priceOver50000.push(products[i]);
  }
}
console.log(priceOver50000);

// 상품 카테고리별 합계금액
result = {};
for (let product of products) {
  if (!(product.category in result)) result[product.category] = 0;
  result[product.category] += product.purchasePrice;
}
console.log(result);
