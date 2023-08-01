$(document).ready(function(){
    $('.wishlist').on('click',function(){
        let cardID=$(this).closest(".card").data("card-id");
        let clickedSelector="#"+cardID+" .wishlist #heart";
        let clickedImagePath=$(clickedSelector).attr("src");
        if(clickedImagePath=="./images/card/heart.png"){
            $(clickedSelector).attr("src","./images/card/redheart.png");
        }else{
            $(clickedSelector).attr("src","./images/card/heart.png");
        }
    });
    const bar=$('#bar');
    const nav=$('#nav_items');
    const close=$('#close');

    if(bar){
        bar.on('click',function(){
            nav.addClass("active");
        })
    }
    if(close){
        close.on("click",()=>{
            nav.removeClass("active");
        })
    }
})
