'use strict';


//////
// get logs
//////
//
//$('.allLogs').on('submit', function(e) {
//    e.preventDefault();
//    
//    
//    
//const getLogs = (logData) => {
//	return new Promise(function (resolve, reject) {
//		$.ajax({
//			url: '/logs',
//			method: 'GET',
//			dataType: 'json',
//			data: JSON.stringify(logData),
//		    success: resolve,
//		    error: reject
//		});
//	})
//}





//////
// save new log button
//////

setDefaults();

        displayResults();


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

            function displayResults() {
                $.getJSON('/logs', function(data) {
                    console.log(data)
                })
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
    
    
//    function todaysDate(){
//        let today = new date();
//        console.log(today);
//    }