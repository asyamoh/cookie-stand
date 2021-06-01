'use strict';


//let container = document.getElementById('container');
// let seattle={
//     min:23,
//     max:65,
//     avg:6.3,
//     customer:[],
//     cookies:[],
//     total:null,
//     workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     updatingTheCookies:function(){
//         // in order to have a randomValue between two numbers

//         for(let i=0;i<this.workingHours.length;i++){
//             let cookies=Math.floor(this.customer[i]*this.avg)
//             console.log(cookies)
//             this.cookies.push(cookies)
//         }
//      },






// updatingTheCustomers: function(){
//     let customer=0;
//     for(let i=0;i<this.workingHours.length;i++){
//         customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
//         console.log(customer)
//         this.customer.push(customer)
//     }
// console.log(this.customer)
// },



// render:function(){
//     let h1El=document.createElement('h1');
//     container.appendChild(h1El);
//     h1El.textContent='seattle';
//     let ulEl=document.createElement('ul');
//     container.appendChild(ulEl);
//     for(let i=0;i<this.workingHours.length;i++){
//         let liEl=document.createElement('li')
//         ulEl.appendChild(liEl)
//         liEl.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`
//     }
// }
// }

// seattle.updatingTheCustomers();
// seattle.updatingTheCookies();
// seattle.render();

  ///newww      
//let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//let arrayOfBranch=[];
//let divEl=
//let tableEl=document.createElement('table');
//container.appendChild(tableEl);


///function Seattle(location, workingHours, min, max, avg) {
  //  this.location = location;
  //  this.workingHours = workingHours;
   // this.min = min;
   // this.max = max;
    //this.avg = avg;
    //this.numOfCookies = [];
    //this.total=0;
    //this.totalArr=[];
    //arrayOfLocation.push(this);

    //this.numOfCookies=function(){


// creating table:
'use strict';

let container = document.getElementById('container');
let table =document.createElement('table');
container.appendChild(table);


let hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let branchs = [];
console.log(branchs);
function Shop (location,minCust,maxCust,avgCookiesPercust){
  this.Location=location;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookiesPercust=avgCookiesPercust;
  this.custNumHourly=[];
  this.cookisPerHour=[];
  this.totalCookies=0;
  branchs.push(this);

}


Shop.prototype.randomCust=function(){
  for (let i=0;i<hours.length;i++){
    this.custNumHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
  console.log(this.cookisPerHour);
};


Shop.prototype.cookiesHourly=function(){
  for (let i=0;i<hours.length;i++){
    this.cookisPerHour.push(Math.ceil(this.avgCookiesPercust*this.custNumHourly[i]));
    this.totalCookies=this.totalCookies+this.cookisPerHour[i];

  }

};


function headerRow(){
  let firstRow=document.createElement('tr');
  table.appendChild(firstRow);

  let emptyCell = document.createElement('th');
  firstRow.appendChild(emptyCell);

  let th = null;
  for (let i = 0; i <= hours.length; i++) {
    th = document.createElement('th');
    firstRow.appendChild(th);
    th.textContent=hours[i];
  }
  let dailyhours = document.createElement('th');
  firstRow.appendChild(dailyhours);
  dailyhours.textContent=('daily hour');

}
headerRow();




Shop.prototype.render=function(){

  let rawData = document.createElement('tr');
  table.appendChild(rawData);
  let LocaName = document.createElement('th');
  rawData.appendChild(LocaName);
  LocaName.textContent=this.Location;
  let td = null;
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    rawData.appendChild(td);
    td.textContent=this.cookisPerHour[i];
  }
  let cell = document.createElement('td');
  rawData.appendChild(cell);
  cell.textContent = this.totalCookies;
};


Shop.prototype.calc=function(){
  this.randomCust();
  this.cookiesHourly();
  this.render();}


let seattle = new Shop('Seattle',23,65,6.3);
let tokyo = new Shop('Tokyo',3,24,1.2);
let dubai = new Shop('Dubai',11,38,3.7);
let paris = new Shop('Paris',20,38,2.3);
let lima = new Shop('Lima',23,65,6.3);
seattle.calc();
tokyo.calc();
dubai.calc();
paris.calc();
lima.calc();


function final(){
  let seattle=document.createElement('tr');
  seattle.appendChild(seattle);
  let tableData=document.createElement('th');
  last.appendChild(tableData);
  tableData.textContent='Totals';
  let cookiesForAll=0;
  for(let i=0;i<hours.length;i++){
    let totalAtOneHour=0;
    for(let j=0;j<branchs.length;j++){
      totalAtOneHour=totalAtOneHour+branchs[j].cookisPerHour[i];
    }
    tableData=document.createElement('td');
    seattle.appendChild(tableData);
    tableData.textContent=totalAtOneHour;
    cookiesForAll=cookiesForAll+totalAtOneHour;
  }
  let lastData=document.createElement('td');
  last.appendChild(lastData);
  lastData.textContent=cookiesForAll;
}
final();



function addlocation(Shop){
 Shop.preventDefault ();

  let nlocation = Shop.target.location.value;
  let min = Shop.target.min.value;
  let max = Shop.target.max.value;
  let avg = Shop.target.avg.value;

  let newlocation = new Shop (nlocation,min,max,avg);
  newlocation.calc();
  let rowCount = table.rows.length;
  //
  final();

}



