// let container = document.getElementById('container');

// // let seattle={
// //     min:23,
// //     max:65,
// //     avg:6.3,
// //     customer:[],
// //     cookies:[],
// //     total:null,
// //     workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
// //     updatingTheCookies:function(){
// //        



// // render:function(){
// //     let h1El=document.createElement('h1');
// //     container.appendChild(h1El);
// //     h1El.textContent='seattle';
// //     let ulEl=document.createElement('ul');
// //     container.appendChild(ulEl);
// //     for(let i=0;i<this.workingHours.length;i++){
// //         let liEl=document.createElement('li')
// //         ulEl.appendChild(liEl)
// //         liEl.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`
// //     }
// // }
// // }

// // seattle.updatingTheCustomers();
// // seattle.updatingTheCookies();
// // seattle.render();

  


// // creating table:


// let table = document.createElement('table');
// container.appendChild(table);
// //
// let workingHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// let shops = [];
// let branchs=[];
// //
// function Shop(location, min, max, avgCookies) {
//   this.Location = location;
//   this.min = min;
//   this.max = max;
//   this.avgCookies = avgCookies;
//   this.custNumHourly = [];
//   this.cookisPerHour = [];
//   this.totalCookies = 0;
//   shops.push(this);
// }
// Shop.prototype.randomCust = function () {
//   for (let i = 0; i < workingHours.length; i++) {
//     this.custNumHourly.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//   }
// };
// Shop.prototype.cookiesHourly = function () {
//   for (let i = 0; i < workingHours.length; i++) {
//     this.cookisPerHour.push(Math.floor(this.avgCookies * this.custNumHourly[i]));
//     this.totalCookies += this.cookisPerHour[i];
//   }
// };
// function headerRow() {
//   let firstRow = document.createElement('tr');
//   table.appendChild(firstRow);
//   let nameCell = document.createElement('th');
//   firstRow.appendChild(nameCell);
//   nameCell.textContent = ('Name');
//   for (let i = 0; i < workingHours.length; i++) {
//     let th = document.createElement('th');
//     firstRow.appendChild(th);
//     th.textContent = workingHours[i];
//   }
//   let dailyhours = document.createElement('th');
//   firstRow.appendChild(dailyhours);
//   dailyhours.textContent = ('Daily Location hours');
// }
// headerRow();
// Shop.prototype.render = function () {
//   let tableData = document.createElement('tr');
//   table.appendChild(tableData);
//   let LocaName = document.createElement('th');
//   tableData.appendChild(LocaName);
//   LocaName.textContent = this.Location;
//   for (let i = 0; i < workingHours.length; i++) {
//     let td = document.createElement('td');
//     tableData.appendChild(td);
//     td.textContent = this.cookisPerHour[i];
//   }
//   let totalTd = document.createElement('td');
//   tableData.appendChild(totalTd);
//   totalTd.textContent = this.totalCookies;
// };
// Shop.prototype.calc = function () {
//   this.randomCust();
//   this.cookiesHourly();
// };
// let seattle = new Shop('Seattle', 23, 65, 6.3);
// let tokyo = new Shop('Tokyo', 3, 24, 1.2);
// let dubai = new Shop('Dubai', 11, 38, 3.7);
// let paris = new Shop('Paris', 20, 38, 2.3);
// let lima = new Shop('Lima', 23, 65, 6.3);
// seattle.calc();
// tokyo.calc();
// dubai.calc();
// paris.calc();
// lima.calc();
// function creatingFooterRow() {
//   let footerRow = document.createElement('tr');
//   table.appendChild(footerRow);
//   let firstFooterTh = document.createElement('th');
//   footerRow.appendChild(firstFooterTh);
//   firstFooterTh.textContent = 'Total';
//   let totalOfTotal = 0;
//   for (let i = 0; i < workingHours.length; i++) {
//     let totalEachHour = 0;
//     for (let j = 0; j < shops.length; j++) {
//       totalEachHour += shops[j].cookisPerHour[i];
//       totalOfTotal += shops[j].cookisPerHour[i];
//     }
//     let dataTh = document.createElement('th');
//     footerRow.appendChild(dataTh);
//     dataTh.textContent = totalEachHour;
//   }
//   let lastTh = document.createElement('th');
//   footerRow.appendChild(lastTh);
//   lastTh.textContent = totalOfTotal;
// }
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
// creatingFooterRow();

// //the forms:

// form.addEventListener('submit',handleSubmiiting);
// function handleSubmiiting(event){
//   event.preventDefault();
//   console.log(event);


// let nlocation = event.target.location.value;
// let min = event.target.min.value;
// let max = event.target.max.value;
// let avg=event.target.avg.value;


// let newlocation = new Shop (nlocation,min,max,avg);
// newlocation.calc();
// }

// //neww shop: 

// Shop.prototype.calc=function(){
//   this.randomCust();
//   this.cookiesHourly();
//   this.render();}



// function final(){
//   let last=document.createElement('tr');
//   table.appendChild(last);
//   let tableData=document.createElement('th');
//   last.appendChild(tableData);
//   tableData.textContent='Totals';
//   let cookiesForAll=0;
//   for(let i=0;i<workingHours.length;i++){
//     let totalAtOneHour=0;
//     for(let j=0;j<branchs.length;j++){
//       totalAtOneHour=totalAtOneHour+branchs[j].cookisPerHour[i];
//     }
//     tableData=document.createElement('td');
//     last.appendChild(tableData);
//     tableData.textContent=totalAtOneHour;
//     cookiesForAll=cookiesForAll+totalAtOneHour;
//   }
//   let lastData=document.createElement('td');
//   last.appendChild(lastData);
//   lastData.textContent=cookiesForAll;
// }
// final();




