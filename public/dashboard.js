
function sleepTotal(){
let logDates = [];
let sleepLogged = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displaySleep() {
    $.getJSON('/logs', function(data) {
     console.log(data.logs[0].sleepTotal);
        let sleep = data.logs
            for (var i = 0; i < sleep.length; i++){
            sleepLogged.push(sleep[i].sleepTotal);
    }
        
                    console.log(sleepLogged.reverse());

                    
});
}

displaySleep();


var ctx = $("#myChart");


var stackedLine = new Chart(ctx, {
 type: 'line',
    data: {
    labels: logDates,
    datasets: [{ 
        data: sleepLogged,
        label: "Sleep Total",
        borderColor: '#FE9985',
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Total Logged Water Intake'
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    }
  }
});
}

sleepTotal();



function waterIntake(){
let logDates = [];
let loggedWater = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displayWater() {
    $.getJSON('/logs', function(data) {
     console.log(data.logs[0].waterIntake);
        let water = data.logs
            for (var i = 0; i < water.length; i++){
            loggedWater.push(water[i].waterIntake);
    }
        
                    console.log(loggedWater.reverse());

                    
});
}

displayWater();


var ctx = $("#waterIntake");


var stackedLine = new Chart(ctx, {
 type: 'line',
  data: {
    labels: logDates,
    datasets: [{ 
        data: loggedWater,
        label: "Water Intake",
        borderColor: "#FE9985",
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Total Logged Water Intake'
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    }
  }
});
}

waterIntake();





function stress(){
let logDates = [];
let loggedStress = [];
    
function displayDates() {
    $.getJSON('/logs', function(data) {
     console.log(data);
        let dates = data.logs
            for (var i = 0; i < dates.length; i++){
            logDates.push(`${new Date(dates[i].date).getMonth()+1}/${new Date(dates[i].date).getDate()+1}/${new Date(dates[i].date).getFullYear()}`);
    }
        
                    console.log(logDates.reverse());

                    
});
}
displayDates();

function displayStress() {
    $.getJSON('/logs', function(data) {
     console.log(data.logs[0].stress);
        let stress = data.logs
            for (var i = 0; i < stress.length; i++){
            loggedStress.push(stress[i].stress);
    }
        
                    console.log(loggedStress.reverse());

                    
});
}

displayStress();


var ctx = $("#stress");


var stackedLine = new Chart(ctx, {
 type: 'line',
  data: {
    labels: logDates,
    datasets: [{ 
        data: loggedStress,
        label: "Stress Levels",
        borderColor: "#FE9985",
        fill: false
      }
    ]
  },
  options: {
    responseive: true,
    title: {
      display: true,
      text: 'Total Logged Stress'
    },
      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    }
  }
});
}

stress();



