$(document).ready(function () {
   
    
});
$(window).load(function() {
     var win = $(window);
    

    var scrFunc = function () {
        var padding;
        var widthWin = $(window).width();
        if(widthWin >991){
            padding = 100;
        }
        else{
            padding = 50;
        }
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .main-baner .body-baner,.main-baner,.sec-developing,.for-flex-columns .side,.sec-lines .head,.sec-lines .flex-contant .left-side,.sec-lines .abs-lines,.sec-lines").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s - padding > r ? $(i).attr("data-anim", "true") : $(i).attr("data-anim", "false");
            
            if($('.sec-lines').attr('data-anim') == 'true'){
                $('.footer').addClass("show");
                
            }
            else{
                $('.footer').removeClass("show");
            }
        });
    }
    
    scrFunc();
    
    $(window).scroll(function(){
         scrFunc();
        
    });
    
    
});