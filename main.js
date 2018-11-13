const CART = {  };
let PRODUCT = [];
document.addEventListener('DOMcontentLoad',()=>{
    getProducts(showProducts, errorMessage);
    CART.init();
    showCart();
});
function showCart(){}
function incrementCart(ev){};
function getProducts(success,failure){
    const URL = "http://prof3ssorst3v3.github.io.sample/products.json"
    fetch(URL, {
    method:'GET',
    mode: 'cors'
})
.then(Response=>Response.json())
.then(showProducts)
.catch(err=>{
    errorMessage(err.message);
});
}



























