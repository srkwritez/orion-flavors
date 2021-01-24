
$(document).ready(function () {
    var template = Handlebars.templates.dishes;
    getChefSpecials().then(function(items){
        $('#chef-special').html(template(items));
    });
    getItemsbyCusine('indian').then(function(cusineItems){
    $('#indian').html(template(cusineItems));
    });
    getItemsbyCusine('italian').then(function(cusineItems){
        $('#italian').html(template(cusineItems));
    });
    getItemsbyCusine('chinese').then(function(cusineItems){
        $('#chinese').html(template(cusineItems));
})
});

async function getChefSpecials(){
    let menu = await $.get("./data/menu.json",function(response){
        return response
    })
    let chefSpecials = menu.items.filter(item=>item.isChefSpecial==true)
    chefSpecials = {items:chefSpecials};
    return chefSpecials;
}

async function getItemsbyCusine(cusine){
    let menu = await $.get("./data/menu.json",function(response){
        return response
    })
    let cusineItems = menu.items.filter(item=>item.cusine==cusine);
    cusineItems = {items:cusineItems};
    return cusineItems;

}