'use strict';

//---------------------------------------------
//show + hide submit form
//---------------------------------------------

$('.searchForDate').on('click', '#createNew', function(){
    $('#log-create-form').show();
    
});

$('#log-create-form').on('click', '.js-logCancelButton', function(){
    $('#log-create-form').hide();
    
});




//---------------------------------------------
// get logs
//---------------------------------------------

function displayResults() {
    $.getJSON('/logs', function(data) {
        console.log(data);

       let logArray = data.logs.map(function(data){
           return `<div class = "eachLog">
               <p>${new Date(data.date).toLocaleString()}</p>
                <p>Sleep Total: ${data.sleepTotal}</p>
                <p>Water Intake: ${data.waterIntake}</p>
                <p>Clean Eating: ${data.cleanEating}</p>
                <p>Stress: ${data.stress}</p>
                <p>Energy: ${data.energy}</p>
                <p>Exercise: ${data.exercise}</p>
                <p>Strength of Community: ${data.communityFeeling}</p>
                </div>
                `
            
//            console.log(data.waterIntake);
        })
       $('#allLogUl').html(logArray);
    });
}


function displayDayLog(){
    $('#js-search-form').submit(function(e){
        e.preventDefault();
        let date = $('#search-date').val();
        console.log("input date", date);
        $.getJSON('/logs', function(data) {
//        console.log(data);

       let logArray = data.logs.filter(function(data){
           return data.date.substring(0,10) === date;
           console.log(data.date.substring(0,10));
       })
       console.log(logArray);
        let today = `
                    <span>${logArray[0].date}</span><br>
`
       $('#todaysLog').html(today);
    })
    
});
}


//function getAllLogs(data){
//    $('.allLogs').append(`${data.date}`);
//}

//---------------------------------------------
// save new log button
//---------------------------------------------





        $('#log-create-form').on('submit', function(e) {
            e.preventDefault();

            let logData = {
                date: $('#entry-date').val(),
                sleepStartHr: $('#sleepstart-hr option:selected').val(),
                sleepStartMin: $('#sleepstart-min option:selected').val(),
                sleepEndHr: $('#sleepend-hr option:selected').val(),
                sleepEndMin: $('#sleepend-min option:selected').val(),
                stress: $('#stress option:selected').val(),
                gratitude: $('#gratitude option:selected').val(),
                energy: $('#energy option:selected').val(),
                communityFeeling: $('#communityFeeling option:selected').val(),
                waterIntake: $('#waterIntake option:selected').val(),
                cleanEating: $('#cleanEating option:selected').val(),
                exercise: $('#exercise option:selected').val(),

            };
            console.log(logData)
            postNewLog(logData);
            });

            function setDefaults() {
                console.log('test')
                $('#sleepstart-hr').val('20');
                $('#sleepstart-min').val('15');
                $('#sleepend-hr').val('06');
                $('#sleepend-min').val('45');
                $('#stress').val('03');
                $('#gratitude').val('02');
                $('#energy').val('05');
                $('#communityFeeling').val('03');
                $('#waterIntake').val('04');
                $('#cleanEating').val('01');
                $('#exercise').val('02')
            }

            function postNewLog(logData) {
            let settings = {
                url: '/logs',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(logData)
            };

            $.ajax(settings)
                .fail((xhr, status, error) => {
                $('.error-message')
                    .empty()
                    .append(`Error: ${error}`);
                });
            }

        setDefaults();
        displayResults();
        displayDayLog();
//        getAllLogs();
    
