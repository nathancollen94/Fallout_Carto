// External Panel created to appear on each page without excess code. All data types are defined in this variable 
var panel = '<div data-role="panel" id="leftpanel" data-position="left" data-display="push" data-theme="a"><div data-role="header"><h1>Browse</h1></div>                                                                        <ul data-role="listview" data-inset="true"><li><a href="index.html" data-url="index.html" class="ui-btn ui-corner-all ui-icon-home ui-btn-icon-left" data-transition="slide">Home</a><a href="#catMain" data-url="index.html" class="ui-btn ui-corner-all ui-icon-info ui-btn-icon-left" data-transition="slide">Categories</a><a href="#featMain" data-url="index.html" class="ui-btn ui-corner-all ui-icon-eye ui-btn-icon-left" data-transition="slide">Featured Article</a><a href="map.html" data-url="map.html" class="ui-btn ui-corner-all ui-icon-navigation ui-btn-icon-left" data-transition="slide">Map</a></a><a href="settings.html" data_url="settings.html" class="ui-btn ui-corner-all ui-icon-gear ui-btn-icon-left" data-transition="slide">Settings</a></li></ul></div>';

$(function () {
    $("body").prepend(panel);
    $("[data-role=panel]").panel().enhanceWithin();
});

//Event Listener for swipe movement. If/Else Statement checks for an open panel to avoid opening one while closing the other. Only left panel present but established incase another panel included on future pages.
$(document).on( "swipeleft swiperight", function(e){
        var dir = 'prev';
        if(e.type == 'swiperight'){
            dir = 'next;'
        }
         if (dir == 'prev'){
             $('#leftpanel').panel('close');
         } else {
             $('#leftpanel').panel('open');
         }
});

//Creates Scroll to Top function on Index Pages.
$(document).on("pagecreate","#indexMain",function(){   
//Used in Footer on each page, scrolls back to top of page-->
        $(`.scrollToTop`).click(function(){
        $(`html,body`).animate({scrollTop : 0},800);
        return false;
        });
    
});
