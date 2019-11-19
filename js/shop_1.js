var STORAGE = {
    name: 'cart',
    get: function() {
        var cart = localStorage.getItem(this.name) || JSON.stringify([]);

        return JSON.parse(cart);
    },
    add: function(newItem) {
        var cart = this.get();

        cart.push(newItem);

        localStorage.setItem(this.name, JSON.stringify(cart));
    }

};


var Products = $('div.products_d');
var Cheese = $('ul.typeOfProduct Li');
$(document).ready(function () {
    var panelColaps = $('.panel-colaps');

    $('.panel').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel').not(this).removeClass('in').next().slideUp();
    });

    
var aProduct = localStorage.getItem('product');
if(aProduct=='ПАСТА'){
    $(Products[4]).addClass('active');
    Products.not(Products[4]).removeClass('active');
    localStorage.clear();
} else if(aProduct=='КОЛБАСА'){
    $(Products[7]).addClass('active');
    Products.not(Products[7]).removeClass('active');
    localStorage.clear();
};
    
    
Cheese.click(function (e) {
    var indexOfLi = Cheese.index(e.target);
    $(Products[indexOfLi]).addClass('active');
    Products.not(Products[indexOfLi]).removeClass('active');
});


var product = $('div.product_container_new');

product.find('a').on('click', function(e) {
    e.preventDefault();
    var currentA = $(this);
    var card = currentA.closest('.product_container_new');
    STORAGE.add(card.html());
    isEmpty();
    // var cartNotEpty = $('div.cart::after');
    // cartNotEpty.css({
    //     'display':'inline'
    })
});
function isEmpty (){
    if (localStorage.getItem('cart') !==null){
        console.log('jjjj');
        
    $("div.cart").removeClass('cart_empty').addClass('cart_not_empty')   
    } else{
        $("div.cart").removeClass('cart_not_empty').addClass('cart_empty')
    };
};
isEmpty ();