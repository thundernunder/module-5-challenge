var now = moment();
var today = moment();
var textAreaEl = $('textarea');
var blockContainer = $(".block-container");
$("#currentDay").text(today.format("MMM Do, YYYY"));
var showNine = document.querySelector('#nine-container');
var saveNine = $('#save-nine');
var saveTen = $('#save-ten');
var saveEleven = $('#save-eleven');
var saveTwelve = $('#save-twelve');
var saveOne = $('#save-one');
var saveTwo = $('#save-two');
var saveThree = $('#save-three');
var saveFour = $('#save-four');
var saveFive = $('#save-five');

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

saveNine.on('click', function() {
        if (textAreaEl.val() === null) {
            alert ('please enter a valid appointment');
        } else {
            localStorage.setItem('9am', textAreaEl.val());
        }
    }
)

saveTen.on('click', function() {
    var textTen = $('#text-ten');
    if (textTen.val() === null) {
        alert ('please enter a valid appointment');
    } else {
        localStorage.setItem('10am', textTen.val());
    }
}
)

saveEleven.on('click', function() {
    var textEleven = $('#text-eleven');
    if (textEleven.val() === null) {
        alert ('please enter a valid appointment');
    } else {
        localStorage.setItem('11am', textEleven.val());
    }
}
)

saveTwelve.on('click', function() {
    var textTwelve = $('#text-twelve');
    if (textTwelve.val() === null) {
        alert ('please enter a valid appointment');
    } else {
        localStorage.setItem('12pm', textTwelve.val());
    }
}
)

saveOne.on('click', function() {
    var textOne = $('#text-one');
    if (textOne.val() === null) {
        alert ('please enter a valid appointment');
    } else {
        localStorage.setItem('1pm', textOne.val());
    }
}
)

saveTwo.on('click', function() {
    var textTwo = $('#text-two');
    if (textTwo.val() === null) {
        alert ('please enter a valid appointment');
    } else {
        localStorage.setItem('2pm', textTwo.val());
    }
}
)

saveThree.on('click', function() {
    var textThree = $('#text-three');
    if (textThree.val() === null) {
        alert ('please enter a valid appointment');
    } else {
        localStorage.setItem('3pm', textThree.val());
    }
}
)

saveFour.on('click', function() {
    var textFour = $('#text-four');
    if (textFour.val() === null) {
        alert ('please enter a valid appointment');
    } else {
        localStorage.setItem('4pm', textFour.val());
    }
}
)

saveFive.on('click', function() {
    var textFive = $('#text-five');
    if (textFive.val() === null) {
        alert ('please enter a valid appointment');
    } else {
        localStorage.setItem('5pm', textFive.val());
    }
}
)








