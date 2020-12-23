const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
];

const renderGoodsItem = ({ title, price }) => {
  return `
  <div class="goods-item">
  <h3>${title}</h3>
  <p>${price}</p>
  <button class="buy-btn">Купить</button>
  </div>
  `;
};

const renderItems = (items) => items.map(renderGoodsItem);

document.querySelector(".goods-list").innerHTML = renderItems(goods).join("");
