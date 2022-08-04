var now = moment();
var today = moment();
var articleEl = $('article');
var blockContainer = $(".block-container");


$("#currentDay").text(today.format("MMM Do, YYYY"));

for (i=0; i <= articleEl.length; i++) {
    var dataTime = articleEl[i];
    var articleHour = parseInt($(dataTime).attr('data-time'));
    
    var currentHour = parseInt(moment().format("H"));
    
    if (articleHour === currentHour) {
        $(dataTime).addClass('present');
    } else if (articleHour < currentHour) {
        $(dataTime).addClass('past');
    } else {
        $(dataTime).addClass('future');
    }
}
console.log(currentHour);










