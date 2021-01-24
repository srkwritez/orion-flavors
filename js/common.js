var menu;
var cart = localStorage.getItem("cart");
$(document).ready(function () {    
    loadMenu();
    loadCart();
    $.get("./data/menu.json",function(response){
        menu = response;
    });

});
$(".add-to-cart").click(function (e) { 
    e.preventDefault();
    e.stopPropagation();    
});

async function loadMenu(){
    menu = menu? menu: await $.get("./data/menu.json",function(response){
       return response;
    });
}

function loadCart(){   
    cart = cart ? JSON.parse(cart):{"items":[]};
    localStorage.setItem("cart",JSON.stringify(cart));
}

function getCart(){
    return cart;
}

function add(itemCode){
    
    let cartItem = cart.items.find(item=>item.code==itemCode);
    if(cartItem){
        updateQuantity(itemCode, cartItem.quantity+1);
        displayCart();
        return;
    }
  
    let item = menu.items.find(item=>item.code==itemCode);
    item.quantity=1;
    item.totalPrice = item.price * item.quantity;
    cart.items.push(item);
    updateCart(cart);
    displayCart();
}

function getItemFromCart(itemCode){
    return cart.items.find(item=>item.code==itemCode);
}

function updateQuantity(itemCode, quantity){
    let updatedCart = getCart();
    updatedCart.items.forEach(item => {
        if(item.code==itemCode){
            item.quantity = quantity
            item.totalPrice = item.price * item.quantity;
            return true;
        }        
    });    
    updateCart(updatedCart);
}

function remove(itemCode){
    let index = cart.items.findIndex(item=>item.code==itemCode);
    
    cart.items.splice(index,1);
    updateCart(cart);
    displayCart()
}

function updateCart(updatedCart){
    cart = updatedCart;
    localStorage.setItem("cart",JSON.stringify(cart));
}

function displayCart(){
    var template = Handlebars.templates.cart;
    $("#cart-items").html(template(getCart()));
    $(".cart-overlay").show();
    $(".header").hide();

}

function hideCart(){
    $(".cart-overlay").hide();
    $(".header").show();

}
$("#take-away").click(function (e) { 
    e.preventDefault();
    displayCart();
    
});

