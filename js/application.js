//==========================CHART===============================
//create a variable to place the pie chart data into
var chartData = {
  labels: ['A', 'B', 'C'],
    //set blank value for the pie chart series
  series: []
};

var templates = [
  { id: 1, name: 'Dark', value: 'css/dark.css'},
  { id: 2, name: 'Light', value: 'css/light.css'}
];

//VUE
var app = new Vue({
  el: '#app',
  data: {
      //pushes data into {{title}}
    title: "Random things that do pretty much NOTHING",
    templates: templates, 
    default_template: 2,
    current_template: templates[0],
      //==========================CHART===============================
      //assign a value to the input fields under the pie chart.
      a: 10,
      //(eg: v-model="a" now has a value of 1) --> fills in the empty series in chartData
      b: 20,
      c: 50,
    rows: [
      {name: "F*#K", surname: "Your", job: "SH!T"},
      {name: "What", surname: "is", job: "life"}
    ]
  },
    
  methods:{
    //switches between light.scss and dark.scss
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
        return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    },
    //creates a row with empty input fields  
    addRow: function(){
      this.rows.push({name:"",job:""});
    },
    //removes row from top of table... couldn't figure out how to remove current row
    removeRow: function(row){
      //console.log(row);
      this.rows.splice(row, 1);
    },
      //==========================CHART===============================
      //create a function to generate a new pie chart once something is placed 
      //into the input fields (used instead of Chartist's "function update()")
    generateChart: function(){
        chartData.series = this.chartSeries()
        return new Chartist.Pie('#chart5', chartData);
    },
      //==========================CHART===============================
      //creates a function that pushes the data placed into the input fields into the 
      //chartSeries. (I THINK) parseInt makes sure it's read as a number and not a string
    chartSeries: function(){
          return [parseInt(this.a), parseInt(this.b), parseInt(this.c)];
      }
  },
    //==========================CHART===============================
    watch: {
        a: function (val, oldVal) {
            console.log('update')
        this.generateChart()
    },
        b: function (val, oldVal) {
            console.log('update')
        this.generateChart()
    },
        
        c: function (val, oldVal) {
            console.log('update')
        this.generateChart()
    }
      },
    
});

//NAVIGATION
$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.test1').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
    else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': 'gray', 'transform': 'translate(60px,105px)'});
    else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
    
    //==========================CHART===============================
    
    //generates chart on page load 
    app.generateChart()
});

