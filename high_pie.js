
var chart = {
   plotBackgroundColor: null,
   plotBorderWidth: null,
   plotShadow: false
            };
var title = {
   text: 'highchart bar chart'   
            };      
var tooltip = {
   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            };
var plotOptions = {
   pie: {
      allowPointSelect: true,
      cursor: 'pointer',
                  
      dataLabels: {
         enabled: false           
                  },
                  
      showInLegend: true
               }
};
var series = [{
   type: 'pie',
   name: 'pie chart',
   data: [
      ['fulltime men enrolled',   31312],
      ['fulltime women enrolled',    34733],
       
               ]
            }];     
var json = {};   
json.chart = chart; 
json.title = title;     
json.tooltip = tooltip;  
json.series = series;
json.plotOptions = plotOptions;
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);