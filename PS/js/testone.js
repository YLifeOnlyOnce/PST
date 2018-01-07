/**
 * Created by macbookair on 2018/1/4.
 */


$(function () {
    $("#box").on("click",function () {
        $("#box").animate({height:"300px"}).css("background-color","green").css("color","white").css("line-height","300px");

    });
});