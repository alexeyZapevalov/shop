
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
        });
    });

var aToProduct = $('.toProduct');
aToProduct.find('a').on('click', function(e){
    var currentA = $(this);
    var currentProduct = currentA.html();
    localStorage.setItem('product', currentProduct);
});
var blockToProduct = $('.discr_block');
blockToProduct.closest('a').on('click', function(e){
    var currentBlock = this;
    var block = currentBlock.innerText;
    localStorage.setItem('product', block)
});

