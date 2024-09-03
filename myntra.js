let bagItems;
onLOad();

function onLOad(){
  let bagItemsStr=localStorage.getItem("bagItems");
  bagItems= bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayHomePage();
displayBagICon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems' , JSON.stringify(bagItems));
  displayBagICon();
}

function displayBagICon(){
  let bagItemElement=document.querySelector(".bag_item_count");
  if(bagItems.length>0){
    bagItemElement.style.visibility='visible';
  bagItemElement.innerText=bagItems.length;
  } else{
    bagItemElement.style.visibility='hidden';
  }
}

function displayHomePage(){
let itemsContainerElement=document.querySelector(".items_container");
if(! itemsContainerElement){
  return;
}
let innerHtml='';
item.forEach(item=> {
  innerHtml+=`<div class="item_container">
  <img  class="item_image" src="${item.item_Image}" alt="">
   <div class="rating">
     ${item.rating.stars}⭐ | ${item.rating.noOfReviews}
   </div>
   <div class="company_name">${item.company_Name}</div>
   <div class="item_name">${item.item_Name}</div>
   <div class="price">
     <span class="current-price">RS ${item.current_price}</span>
     <span class="original-price">RS ${item.original_Price}</span>
     <span class="discount">${item.discount}% OFF</span>
   </div>
   <button class="btn_add_bag" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`;
});
itemsContainerElement.innerHTML= innerHtml;
}
