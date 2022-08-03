var now = moment();
var today = moment();
var articleEl = $('article');

$("#currentDay").text(today.format("MMM Do, YYYY"));

for (i=0; i <= articleEl.length; i++) {
    var dataTime = articleEl[i];
    var articleHour = parseInt($(dataTime).attr('data-time'));
    
    var currentHour = parseInt(moment().format("H"));
    
    if (articleHour < currentHour) {
        $(articleEl).addClass('past');
    } else if (articleHour === currentHour) {
        $(articleEl).addClass('present');
    } else if (articleHour > currentHour) {
        $(articleEl).addClass('future');
    }
}
console.log(currentHour);
var articleHour = parseInt($(dataTime).attr('data-time'));
console.log(articleHour);










