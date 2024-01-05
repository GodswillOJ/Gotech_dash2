  let myChart = document.getElementById('myChart').getContext('2d');
  let myClicks = document.getElementById('myClicks').getContext('2d');
                                 
  let massPopChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ['November','December','January'],
        datasets: [{
                label: 'Number of Orders and Views',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [10, 20, 15, 25, 30],
                fill: true,
                backgroundColor: 'skyblue',
                borderColor: 'lightblue',
                borderWidth: 1,
                borderColor: 'blue',
                hoverBorderWidth: '#000'
           }],
    },    

    options: {
      plugins: {
        title: {
          display: true,
          text: 'Latest orders',
          // font: {
          //         size: 16, // Adjust the font size here
          //         color: "blue",
          //       },
          datalabels: {
            color: 'blue',
            font: {
              size: 40
            },
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    }             
        })
  let allClickChart = new Chart(myClicks, {
    type: 'polarArea',
    data: {
        labels: ['November','December','January'],
        datasets: [{
                label: 'Number of Orders and Views',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [10, 20, 15, 25, 30],
                fill: true,
                backgroundColor: [
                  'rgb(255, 85, 23, 1)',                
                  'rgb(54, 163, 235, 1)',                
                  'rgb(255, 206, 86, 1)',                
                ],
                borderColor: 'lightblue',
                borderWidth: 1,
                borderColor: 'blue',
                hoverBorderWidth: '#000'
           }],
    },    
    options: {
     
      plugins: {
        title: {
          display: true,
          text: 'Latest orders',
          font: {
            size: 16, // Adjust the font size here
            color: 'black'
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    }             
        })

        