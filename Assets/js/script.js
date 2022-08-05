var today = moment();
var textAreaEl = $('textarea');
var sectionEl = $('section');
var saveNine = $('#save-nine');
var saveTen = $('#save-ten');
var saveEleven = $('#save-eleven');
var saveTwelve = $('#save-twelve');
var saveOne = $('#save-one');
var saveTwo = $('#save-two');
var saveThree = $('#save-three');
var saveFour = $('#save-four');
var saveFive = $('#save-five');
var clearButton = $('#clear-button');

// current day dynamically updated at top of page
$("#currentDay").text(today.format("MMM Do, YYYY"));


// compare current time to timeblock value to determine text area background color
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

// event listeners for save buttons to store user input in local storage
saveNine.on('click', function() {
        if (textAreaEl.val() === "") {
            alert ('please enter a valid appointment');
        } else {
            alert('Appointment Saved!');
            localStorage.setItem('9am', textAreaEl.val());
        }
    }
)

saveTen.on('click', function() {
    var textTen = $('#text-ten');
    if (textTen.val() === "") {
        alert ('please enter a valid appointment');
    } else {
        alert('Appointment Saved!');
        localStorage.setItem('10am', textTen.val());
    }
}
)

saveEleven.on('click', function() {
    var textEleven = $('#text-eleven');
    if (textEleven.val() === "") {
        alert ('please enter a valid appointment');
    } else {
        alert('Appointment Saved!');
        localStorage.setItem('11am', textEleven.val());
    }
}
)

saveTwelve.on('click', function() {
    var textTwelve = $('#text-twelve');
    if (textTwelve.val() === "") {
        alert ('please enter a valid appointment');
    } else {
        alert('Appointment Saved!');
        localStorage.setItem('12pm', textTwelve.val());
    }
}
)

saveOne.on('click', function() {
    var textOne = $('#text-one');
    if (textOne.val() === "") {
        alert ('please enter a valid appointment');
    } else {
        alert('Appointment Saved!');
        localStorage.setItem('1pm', textOne.val());
    }
}
)

saveTwo.on('click', function() {
    var textTwo = $('#text-two');
    if (textTwo.val() === "") {
        alert ('please enter a valid appointment');
    } else {
        alert('Appointment Saved!');
        localStorage.setItem('2pm', textTwo.val());
    }
}
)

saveThree.on('click', function() {
    var textThree = $('#text-three');
    if (textThree.val() === "") {
        alert ('please enter a valid appointment');
    } else {
        alert('Appointment Saved!');
        localStorage.setItem('3pm', textThree.val());
    }
}
)

saveFour.on('click', function() {
    var textFour = $('#text-four');
    if (textFour.val() === "") {
        alert ('please enter a valid appointment');
    } else {
        alert('Appointment Saved!');
        localStorage.setItem('4pm', textFour.val());
    }
}
)

saveFive.on('click', function() {
    var textFive = $('#text-five');
    if (textFive.val() === "") {
        alert ('please enter a valid appointment');
    } else {
        alert('Appointment Saved!');
        localStorage.setItem('5pm', textFive.val());
    }
}
)

// text areas populated with user input from local storage on refresh
$('#text-nine').val(localStorage.getItem('9am'));
$('#text-ten').val(localStorage.getItem('10am'));
$('#text-eleven').val(localStorage.getItem('11am'));
$('#text-twelve').val(localStorage.getItem('12pm'));
$('#text-one').val(localStorage.getItem('1pm'));
$('#text-two').val(localStorage.getItem('2pm'));
$('#text-three').val(localStorage.getItem('3pm'));
$('#text-four').val(localStorage.getItem('4pm'));
$('#text-five').val(localStorage.getItem('5pm'));

// if user wants to clear all calendar data
$('#clear-button').on('click', function () {
    var confirmClear = confirm('Are you sure you want to clear your calendar?')

    if(confirmClear === false) {
        alert('Phew! That was close');
    } else {
        alert('Calendar cleared.');
        localStorage.clear();
        location.reload();
    }
})















