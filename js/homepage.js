
$(document).ready(function () {
    var template = Handlebars.templates.dishes;
    getBestSellers().then(function(bestSellers){
        $('#bestsellers').html(template(bestSellers));
    })
});

async function getBestSellers(){
await loadMenu();
let bestSellers = menu.items.filter(item=>item.isBestSeller==true)
bestSellers = {items:bestSellers};
return bestSellers;


}