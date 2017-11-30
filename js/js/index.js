/*=====creatBy mwq 2017/11/29 =====*/

/*
!function (window, document, $, undefined) {
    var $navList1 = $('.nav-list1'),
        $as = $navList1.find('a');
        $as.on('click', function() {
            var $this = $(this),
                item = $this.attr('href');
            $(item).css('padding-top', '65px');

        })

}(window, document, jQuery);*/

var showPageController = function (){
    var that = this;
    this.init=function () {
        that.regEvent();
    }
    this.regEvent = function(){
        that.headerTitleClick();

    }
    this.headerTitleClick = function(){
        var $navList1 = $('.nav-list1'),
            $as = $navList1.find('a');
        $as.on('click', function() {
            var $this = $(this),
                item = $this.attr('href');
            $(item).css('padding-top', '65px');

        })
    }



}

$(function () {
    var qst = new showPageController();
    qst.init();
});