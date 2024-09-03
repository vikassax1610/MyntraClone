let bagItemObjects;
onLoad();
function onLoad(){
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary(){
  let bagSummary= document.querySelector('.bag-summary');
  let totalItem=bagItemObjects.length;
  let totalMRP=0;
  let totalDiscount=0;
  
  bagItemObjects.forEach(bagItem => {
    totalMRP+=bagItem.original_Price;
    totalDiscount+=bagItem.original_Price-bagItem.current_price;
  });
  let finalPayment= totalMRP-totalDiscount+99;
  bagSummary.innerHTML =`<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem}) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">- ${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}

function loadBagItemObjects(){
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for (i=0 ; i<item.length;i++){
      if(itemId==item[i].id){
        return item[i];
      }
    }
  })
  console.log(bagItemObjects);
}

  function displayBagItems(){
   let containerElement=document.querySelector('.bag-items-container');
   let innerHTML='';
   bagItemObjects.forEach(bagItem => {
     innerHTML += generateItemHTML(bagItem); 
    
   });
    containerElement.innerHTML=innerHTML;
  }

  function removeFromBag(itemId){
    bagItems.filter(bagItemId=> bagItemId !==itemId );
    localStorage.setItem('bagItems' , JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagICon();
    displayBagItems();
    displayBagSummary();
  }

  function generateItemHTML(item){
    return ` <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.item_Image}.jpg">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_Name}</div>
      <div class="item-name">${item.item_Name}</div>
      <div class="price-container">
        <span class="current-price">RS ${item.current_price}</span>
        <span class="original-price">RS ${item.original_Price}</span>
        <span class="discount-percentage">(${item.discount}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">14 days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">12 Jan 2024</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick=removeFromBag(${item.id});>X</div>
  </div>`;
  }