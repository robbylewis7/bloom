////////////////////
//Sleep Total Chart
////////////////////


function sleepTotal(){
    let logDates = [];
    let sleepLogged = [];



    function displayDates() {    
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let dates = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < dates.length; i++){
                    logDates.push(`${new Date(dates[i].date).getUTCMonth()+1}/${new Date(dates[i].date).getUTCDate()}/${new Date(dates[i].date).getUTCFullYear()}`);
                };
            }
        })
    }


    displayDates();


    function displaySleep() {
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let sleep = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < sleep.length; i++){
                    sleepLogged.push(sleep[i].sleepTotal);
                }



            }});
    }

    displaySleep();



    var ctx = $("#myChart");


    var stackedLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logDates,
            datasets: [{ 
                data: [],
                label: "Sleep Total",
                borderColor: '#FE9985',
                backgroundColor: '#fff',
                fill: false
            }
                      ]
        },
        options: {
            responseive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Total Sleep per Day',
                fontSize: 18,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Sleep (Hours)',
                        fontSize: 14,

                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 3 seconds
    setTimeout(function() {
        addData(stackedLine, '', '#FE9985', sleepLogged);
    }, 500);

}

sleepTotal();


////////////////////
//Clean Eating Total Chart
////////////////////




function cleanEating(){
    let logDates = [];
    let cleanLogged = [];


    console.log(cleanLogged)
    function displayDates() {    
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let dates = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < dates.length; i++){
                    logDates.push(`${new Date(dates[i].date).getUTCMonth()+1}/${new Date(dates[i].date).getUTCDate()}/${new Date(dates[i].date).getUTCFullYear()}`);
                }


            }
        })
    }

    displayDates();


    function displayClean() {
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let cleanEating = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < cleanEating.length; i++){
                    cleanLogged.push(cleanEating[i].cleanEating);
                }



            }});
    }

    displayClean();


    var ctx = $("#cleanEating");


    var stackedLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logDates,
            datasets: [{ 
                data: [cleanLogged],
                label: "Clean Eating Total",
                borderColor: '#81B29A',
                backgroundColor: '#fff',
                fill: false
            }
                      ]
        },
        options: {
            responseive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Clean Eating Rating per Day',
                fontSize: 18,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Daily Rating (1-5)',
                        fontSize: 14,

                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        beginAtZero: true,
//                        max: 5,
//                        stepSize: 1,
                    }
                }]
            }
        }
    });




    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 3 seconds
    setTimeout(function() {
        addData(stackedLine, '', '#81B29A', cleanLogged);
    }, 500);

}

cleanEating();



////////////////////
//Energy Total Chart
////////////////////




function energy(){
    let logDates = [];
    let energyLogged = [];



    function displayDates() {    
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let dates = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < dates.length; i++){
                    logDates.push(`${new Date(dates[i].date).getUTCMonth()+1}/${new Date(dates[i].date).getUTCDate()}/${new Date(dates[i].date).getUTCFullYear()}`);
                }


            }
        })
    }

    displayDates();


    function displayEnergy() {
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let energy = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < energy.length; i++){
                    energyLogged.push(energy[i].energy);
                }



            }});
    }

    displayEnergy();


    var ctx = $("#energy");


    var stackedLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logDates,
            datasets: [{ 
                data: [],
                label: "Energy Total",
                borderColor: '#6D98BA',
                backgroundColor: '#fff',
                fill: false
            }
                      ]
        },
        options: {
            responseive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Energy Rating per Day',
                fontSize: 18,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Daily Rating (1-5)',
                        fontSize: 14,

                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        beginAtZero: true,
//                        max: 5,
//                        stepSize: 1,
                    }
                }]
            }
        }
    });



    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 3 seconds
    setTimeout(function() {
        addData(stackedLine, '', '#6D98BA', energyLogged);
    }, 500);

}

energy();




////////////////////
//Exercise Total Chart
////////////////////




function exercise(){
    let logDates = [];
    let exerciseLogged = [];



    function displayDates() {    
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let dates = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < dates.length; i++){
                    logDates.push(`${new Date(dates[i].date).getUTCMonth()+1}/${new Date(dates[i].date).getUTCDate()}/${new Date(dates[i].date).getUTCFullYear()}`);
                }


            }
        })
    }

    displayDates();


    function displayExercise() {
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let exercise = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < exercise.length; i++){
                    exerciseLogged.push(exercise[i].exercise);
                }



            }});
    }

    displayExercise();


    var ctx = $("#exercise");


    var stackedLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logDates,
            datasets: [{ 
                data: [],
                label: "Exercise Total",
                borderColor: '#99B2DD',
                backgroundColor: '#fff',
                fill: false
            }
                      ]
        },
        options: {
            responseive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Exercise Rating per Day',
                fontSize: 18,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Daily Rating (1-5)',
                        fontSize: 14,

                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        beginAtZero: true,
//                        max: 5,
//                        stepSize: 1,
                    }
                }]
            }
        }
    });

    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 3 seconds
    setTimeout(function() {
        addData(stackedLine, '', '#99B2DD', exerciseLogged);
    }, 500);


}

exercise();



////////////////////
//Stress Total Chart
////////////////////




function stress(){
    let logDates = [];
    let stressLogged = [];



    function displayDates() {    
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let dates = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < dates.length; i++){
                    logDates.push(`${new Date(dates[i].date).getUTCMonth()+1}/${new Date(dates[i].date).getUTCDate()}/${new Date(dates[i].date).getUTCFullYear()}`);
                }


            }
        })
    }

    displayDates();


    function displayStress() {
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let stress = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < stress.length; i++){
                    stressLogged.push(stress[i].stress);
                }



            }});
    }

    displayStress();


    var ctx = $("#stress");


    var stackedLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logDates,
            datasets: [{ 
                data: [],
                label: "Stress Total",
                borderColor: '#ADAABF',
                backgroundColor: '#fff',
                fill: false
            }
                      ]
        },
        options: {
            responseive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Stress Rating per Day',
                fontSize: 18,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Daily Rating (1-5)',
                        fontSize: 14,

                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        beginAtZero: true,
//                        max: 5,
//                        stepSize: 1,
                    }
                }]
            }
        }
    });



    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 3 seconds
    setTimeout(function() {
        addData(stackedLine, '', '#ADAABF', stressLogged);
    }, 500);
}


stress();




////////////////////
//Water Intake Total Chart
////////////////////




function waterIntake(){
    let logDates = [];
    let waterLogged = [];



    function displayDates() {    
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let dates = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < dates.length; i++){
                    logDates.push(`${new Date(dates[i].date).getUTCMonth()+1}/${new Date(dates[i].date).getUTCDate()}/${new Date(dates[i].date).getUTCFullYear()}`);
                }


            }
        })
    }

    displayDates();


    function waterIntake() {
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let waterIntake = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < waterIntake.length; i++){
                    waterLogged.push(waterIntake[i].waterIntake);
                }



            }});
    }

    waterIntake();


    var ctx = $("#waterIntake");


    var stackedLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logDates,
            datasets: [{ 
                data: [],
                label: "Water Intake Total",
                borderColor: '#C0E8F9',
                backgroundColor: '#fff',
                fill: false
            }
                      ]
        },
        options: {
            responseive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Water Intake per Day',
                fontSize: 18,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Water (oz)',
                        fontSize: 14,

                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        beginAtZero: true,
//                        max: 80,
//                        stepSize: 16,
                    }
                }]
            }
        }
    }); 



    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 3 seconds
    setTimeout(function() {
        addData(stackedLine, '', '#C0E8F9', waterLogged);
    }, 500);

}

waterIntake();




////////////////////
//Social support Total Chart
////////////////////




function socialSupport(){
    let logDates = [];
    let socialLogged = [];




    function displayDates() {    
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let dates = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < dates.length; i++){
                    logDates.push(`${new Date(dates[i].date).getUTCMonth()+1}/${new Date(dates[i].date).getUTCDate()}/${new Date(dates[i].date).getUTCFullYear()}`);
                }


            }
        })
    }

    displayDates();


    function socialSupport() {
        $.ajax({
            url: '/logs/user/'+localStorage.getItem('username'),
            method: 'GET',
            dataType: 'json',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('authToken')
            },
            success: function(data) {
                let socialSupport = data.logs.sort(function(a,b){
                    return new Date(a.date) - new Date(b.date)})
                for (var i = 0; i < socialSupport.length; i++){
                    socialLogged.push(socialSupport[i].communityFeeling);
                }



            }});
    }

    socialSupport();


    var ctx = $("#socialSupport");


    var stackedLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: logDates,
            datasets: [{ 
                data: [],
                label: "Social Support Rating",
                borderColor: '#FE5F55',
                backgroundColor: '#fff',
                fill: false
            }
                      ]
        },
        options: {
            responseive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Social Support Rating per Day',
                fontSize: 18,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Daily Rating (1-5)',
                        fontSize: 14,

                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        beginAtZero: true,
//                        max: 5,
//                        stepSize: 1,
                    }
                }]
            }
        }
    });


    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 3 seconds
    setTimeout(function() {
        addData(stackedLine, '', '#505168', socialLogged);
    }, 500);

}

socialSupport();







var ctx = $("#example");


    var stackedLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["09/12/2018", "09/13/2018", "09/14/2018"],
            datasets: [{ 
                data: [],
                label: "Social Support Rating",
                borderColor: '#FE5F55',
                backgroundColor: '#fff',
                fill: false
            }
                      ]
        },
        options: {
            responseive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Stress Rating per Day',
                fontSize: 18,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Daily Rating (1-5)',
                        fontSize: 14,

                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        beginAtZero: true,
                        max: 5,
                        stepSize: 1,
                    }
                }]
            }
        }

   });

    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 3 seconds
    setTimeout(function() {
        addData(stackedLine, '', '#18689', [2,3,4]);
    }, 1000);

 


// app.get('/logs', (req, res) =>{
//     Logs.find()
//     .then( logs =>{
//         res.status(200).json({
//             logs: logs.map(log.serialize())
//         })
//     })
//     .catch(err =>{
//         console.error(err);
//         res.status(500).json
//     })
// })





