
$(document).ready(function () {
    var template = Handlebars.templates.dishes;
    getBestSellers().then(function(bestSellers){
        $('#bestsellers').html(template(bestSellers));
    })
});

async function getBestSellers(){
let menu = await $.get("../data/menu.json",function(response){
    return response
})
let bestSellers = menu.items.filter(item=>item.isBestSeller==true)
bestSellers = {items:bestSellers};
return bestSellers;


}