/**
 * Created by PC on 15.03.2016.
 */

(function() {

    var $window = $(window),
        flexslider;

    function getGridSize() {
        return (window.innerWidth < 500) ? 2 :  (window.innerWidth < 700) ? 3 :  (window.innerWidth < 900) ? 5 : 6;
    }

    $(function() {
        SyntaxHighlighter.all();
    });


    $(window).load(function() {
        /*var container_width = $('.container').width();
        var one_item = container_width/5-5;*/

        $('#home-slider').flexslider({
            animation: "slide",
            controlNav: false,
            prevText: "+",
            nextText: "+"
        });

        $('#ingridient-slider').flexslider({
            animation: "slide",
            controlNav: false,
            prevText: "+",
            nextText: "+"
        });

        $('#cookies-slider').flexslider({
            animation: "slide",
            directionNav: false,
            itemWidth: 125,
            itemMargin: 5,
            slideshowSpeed: 3000,
            initDelay: 300,
            animationSpeed: 500,
            minItems: getGridSize(),
            maxItems: getGridSize(),
            start: function (slider) {
                flexslider = slider;
            }
       });

        //$('#cookies-slider .flex-control-nav li a').append('<span>||||||</span>')
        var countLi = $('#cookies-slider .flex-control-nav li').size();
        var nav_width = $('.flex-control-nav.flex-control-paging').width();
        $('#cookies-slider .flex-control-nav li').css('width', nav_width/countLi);
    });

    $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
    });
}());

/** Show top submenu **/
    $('#top-menu > li').click(function(){
        if ($(this).hasClass('dropdown')) {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
            }
            else {
                $('.dropdown').addClass('open');
                $(this).addClass('open');
            }
        }
        else{
            $('.dropdown').removeClass('open');
        }
    });

    $('.menu-toggle').click(function(){
        if ($(this).hasClass('show-menu')) {
            $(this).removeClass('show-menu');
            $('#top-menu').parent().hide();
        }
        else {
            $('.dropdown').addClass('show-menu');
            $(this).addClass('show-menu');
            $('#top-menu').parent().show();
        }
    });

$(window).resize(function(){
    var countLi = $('#cookies-slider .flex-control-nav li').size();
    var nav_width = $('.flex-control-nav.flex-control-paging').width();
    $('#cookies-slider .flex-control-nav li').css('width', nav_width/countLi);

    if($(window).width() >= 850){
        $('.menu-wraper').css('display', 'block');
    }
    else{
        $('.menu-wraper').css('display', 'none');
    }
});