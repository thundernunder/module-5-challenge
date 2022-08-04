var now = moment();
var today = moment();
var articleEl = $('article');
var blockContainer = $(".block-container");
$("#currentDay").text(today.format("MMM Do, YYYY"));
var showNine = document.querySelector('#nine-container');

for (i=0; i <= articleEl.length; i++) {
    var dataTime = articleEl[i];
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

// user clicks timeslot to add appointment
function makeAppointment() {
    var addButton = document.querySelector('#add-button');
    addButton.addEventListener('click', function() {
    showNine.style.display = 'block';
    addButton.style.display = 'none';
})
addAppointment();
    
}

function addAppointment() {
    var saveButton = document.querySelector('#nine-button');
    saveButton.addEventListener('click', function() {
        var appointment = document.querySelector('#appointment-name').value;
        localStorage.setItem('appointment-name', appointment);
        var setNineAppointment = document.querySelector('#set-nine-appointment');
        setNineAppointment.textContent = localStorage.getItem('appointment-name');
        showNine.style.display = 'none';

    })
}

makeAppointment();


// appointment details includes name and...?











