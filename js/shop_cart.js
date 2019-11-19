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
    },
    clear: function(){
        localStorage.clear()
    }

};
var items = STORAGE.get();

var row = $('div.products_in_cart');
var container = $('div.cart_block');

if (items.length > 0) {
    for (var i = 0; i < items.length; i++) {
        var currentProduct;

        if (i === 0) {
            var product = $('div.product_container_new');

            currentProduct = product;

            product.html(items[i]);
        } else {
            var productRow = $('.row.products_in_cart:eq(0)');
            var productCloneRow = productRow.clone();
            productCloneRow.find('div.product_container_new').html(items[i]);
            container.append(productCloneRow);
            currentProduct = productCloneRow.find('div.product_container_new');
        }

        // currentProduct.css({
        //     'pointer-events': 'none'
        // });
        // currentProduct.find('div.btn_cart').remove();
        var placeToDel = currentProduct.find('div.add_cart');
        placeToDel.html('Удалить товар');
        var price = currentProduct.find('.price').html();
        currentProduct.closest('.row').find('.sum').html(price);

        currentProduct.closest('.row').find('[type=number]').on('change', function() {
            var value = $(this).val();
            var thisPrice = parseInt($(this).closest('.products_in_cart').find('.price').html());
            $(this).closest('.row').find('.sum').html(thisPrice * value + ',00 <span>грн</span>');
        });
        isEmpty();
    }    
};
/*  */

// var productContainerNew = $('div.product_container_new');
// for (var i=0; i<productContainerNew.length; i++){
//     var currentProductPlace = productContainerNew[i].find('div.product_discr_price');
//     var removeProduct = html('<div class="remove_product"> Удалить товар</div>');
//     currentProductPlace.append(removeProduct);
// }
var product = $('div.product_container_new');
var placeToDel = $('a div.add_cart');
placeToDel.on('click', function(e){
    e.preventDefault();
    row = $('div.products_in_cart');
    var indexOfProduct = placeToDel.index(e.target);
    row[indexOfProduct].remove();
    var card = $(product[indexOfProduct]);
    localStorage.clear();
    isEmpty();
    product = $('div.product_container_new');
    for(var i=0; i<product.length; i++){
        var currentProduct = $(product[i]);
        STORAGE.add(currentProduct.html());
    }
    console.log(indexOfProduct);
});

function sum(){
    var sum = $('div.sum');
    var totalSum = $('div.total_sum');
    var total = 0;
    for(var i=0; i<sum.length; i++){

        var currentSum = $(sum[i]).html();
        total = total + parseInt(currentSum);
    };
    totalSum.html(total + ',00 <span>грн</span>');
};
sum();
// $('div.total_sum');
// var result = sum.reduce(function(sum, current) {
//     return sum + current;
//   }, 0);

var button = $('.button');
button.click(function(){
    localStorage.clear()
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
