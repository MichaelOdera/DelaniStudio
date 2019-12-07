 $(document).ready(function () {

     /*WHAT WE DO SECTION STYLING*/
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


    /*Creating the toggle function for the Portfolio section*/
    /*The toggle function is on hover*/
    $('#folio-card-one').hover(function(){
        $('.overlayone').slideToggle();
    });

    $('#folio-card-two').hover(function(){
            $('.overlaytwo').slideToggle();
    });

    $('#folio-card-three').hover(function(){
            $('.overlaythree').slideToggle();
    });

    $('#folio-card-four').hover(function(){
            $('.overlayfour').slideToggle();
    });

    $('#folio-card-five').hover(function(){
            $('.overlayfive').slideToggle();
    });

    $('#folio-card-six').hover(function(){
            $('.overlaysix').slideToggle();
    });

    $('#folio-card-seven').hover(function(){
            $('.overlayseven').slideToggle();
    });

    $('#folio-card-eight').hover(function(){
            $('.overlayeight').slideToggle();
    });

});
