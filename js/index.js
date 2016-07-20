/**
 * Created by Virus on 23.03.2016.
 */
$(function(){
    var social = "<div class='hover'>" +
        "<a href='#' class='social'><i class='fa fa-facebook'></i></a>" +
        "<a href='#' class='social'><i class='fa fa-twitter'></i></a>" +
        "<a href='#' class='social'><i class='fa fa-google-plus'></i></a>" +
        "<a href='#' class='social'><i class='fa fa-dribbble'></i></a>" +
        " </div>";
    var search = " <div class='search'>" +
        " <img src='image/search.png' />" +
        " <div class='text-search'>" +
        " <h5> Some Title </h5>" +
        " <h6> Some text</h6> " +
        "</div>"+
        "</div>";
    $(".img-wrap").mouseenter(onSection1);
    function onSection1() {
        $(this).append(search);
    }
    $(".img-wrap").mouseleave(outSection1);
    function outSection1(){
        $(".search").remove();
    }
    $(".section2-block").mouseenter(onSection2);
    function onSection2() {
        $(this).append(social);
    }
    $(".section2-block").mouseleave(outSection2);
    function outSection2(){
        $(".hover").remove();
    }
    $(".header-button").click(HeadBtnClick);
    function HeadBtnClick(){
        $(".my-nav").slideToggle();
    }
     $(".section1-button").click(Section1BtnClick);
    function Section1BtnClick(){
        $(".nav-filter").slideToggle();
    }

});