 $(document).ready(function () {

     /*WHAT WE DOSECTIO STYLING*/
     /*toggle for the design part*/
     $('#design-image').click(function () {
        $('#design-paragraph').show();
        $('#design-image').hide();
    });
        
    $('#design-paragraph').click(function(){
        $('#design-image').show();
        $('#design-paragraph').hide();
    });
    
    /*toggle for the development part*/
    $('#development-image').click(function () {
        $('#development-paragraph').show();
        $('#development-image').hide();
    });

    $('#development-paragraph').click(function(){
        $('#development-image').show();
        $('#development-paragraph').hide();
    });

    /*toggle for the product part*/
    $('#product-image').click(function () {
        $('#product-paragraph').show();
        $('#product-image').hide();
    });

    $('#product-paragraph').click(function(){
        $('#product-image').show();
        $('#product-paragraph').hide();
    });

});
