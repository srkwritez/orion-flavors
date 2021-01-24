(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cart'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"row product-row\">\r\n        <div class=\"image-col\">\r\n         <img src=\"./assets/dishes/"
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":43}}}) : helper)))
    + ".jpg\" width=\"100%\" alt=\"\" srcset=\"\">\r\n        </div>\r\n        <div class=\"col-description\">\r\n          <p class=\"dish-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":39}}}) : helper)))
    + "</p>\r\n          <p class=\"dish-price\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"currencySymbol") || (depth0 != null ? lookupProperty(depth0,"currencySymbol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencySymbol","hash":{},"data":data,"loc":{"start":{"line":8,"column":32},"end":{"line":8,"column":50}}}) : helper)))
    + alias4(((helper = (helper = lookupProperty(helpers,"totalPrice") || (depth0 != null ? lookupProperty(depth0,"totalPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalPrice","hash":{},"data":data,"loc":{"start":{"line":8,"column":50},"end":{"line":8,"column":64}}}) : helper)))
    + "</p>\r\n          <p class=\"qty\">QTY: "
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":9,"column":30},"end":{"line":9,"column":42}}}) : helper)))
    + "</p>      \r\n        </div>\r\n        <div class=\"col-remove\">\r\n         <button type=\"button\" class=\"btn btn-danger btn-circle btn-sm\" onclick=\"remove("
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":12,"column":88},"end":{"line":12,"column":96}}}) : helper)))
    + ")\">X</button> \r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":15,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['dishes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col-sm-3 col-md-6 col-lg-3\">\r\n    <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"./assets/dishes/"
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":4,"column":55},"end":{"line":4,"column":63}}}) : helper)))
    + ".jpg\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":74},"end":{"line":4,"column":82}}}) : helper)))
    + "\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":35},"end":{"line":6,"column":43}}}) : helper)))
    + "</h5>\r\n            <p class=\"card-text dish-short-description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":56},"end":{"line":7,"column":71}}}) : helper)))
    + "</p>\r\n            <p class=\"card-text dish-price\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"currencySymbol") || (depth0 != null ? lookupProperty(depth0,"currencySymbol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencySymbol","hash":{},"data":data,"loc":{"start":{"line":8,"column":44},"end":{"line":8,"column":62}}}) : helper)))
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":8,"column":62},"end":{"line":8,"column":71}}}) : helper)))
    + "</p>\r\n            <a  href=\"#\" class=\"btn btn-primary add-to-cart\" onclick=\"add("
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":9,"column":74},"end":{"line":9,"column":82}}}) : helper)))
    + ")\">Add</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();