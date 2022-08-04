var now = moment();
var today = moment();
var textAreaEl = $('textarea');
var blockContainer = $(".block-container");
$("#currentDay").text(today.format("MMM Do, YYYY"));
var showNine = document.querySelector('#nine-container');

for (i=0; i <= textAreaEl.length; i++) {
    var dataTime = textAreaEl[i];
    var articleHour = parseInt($(dataTime).attr('data-time'));
    
    var currentHour = parseInt(moment().format("H"));
    
    if (articleHour < currentHour) {
        $(dataTime).addClass('past');
    } else if (articleHour === currentHour) {
        $(dataTime).addClass('present');
    } else {
        $(dataTime).addClass('future');
    }
}












