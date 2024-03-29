// console.log("Hello World from simple_highcharts.js!");

// Data of the line chart
var series = [
    {
       name: 'fulltime men enrolled',
       data: [1607,2031,1838,1893,1695,1858,1583,2328,2616,2538,2711,2669,2725,3220]
    }, 
    {
       name: 'fulltime women enrolled',
       data: [2113,2558,2303,2399,2054,2089,1861,2245,2612,2383,2581,3077,2974,3484]
    }, 

 ];

 // Configuration about the plot
 var title = {
    text: 'line chart'   
 };
 var xAxis = {
    categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
 };
 var yAxis = {
    title: {
       text: 'number of people'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
 };  
 
 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);