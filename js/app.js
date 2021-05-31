'use strict';


let container = document.getElementById('container')
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


let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let max = 64;
let min = 10;
let total=0;


function Seattle(location, workingHours, min, max, avg) {
    this.location = location;
    this.workingHours = workingHours;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookies = [];
    this.customer = [];
    this.total=0;


}



Seattle.prototype.Cookiesfun = function () {
    for (let i = 0; i < this.workingHours.length; i++) {
        this.cookies.push(Math.floor(Math.random() * (this.max - this.min) + this.min))
        console.log(this.cookies[i])
        this.total=this.total+this.cookies[i];
    }
    
}
Seattle.prototype.render = function () {
    let h1El = document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent = 'seattle';
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < this.workingHours.length; i++) {
        let liEl = document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent = `${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
    
}





let seettle = new Seattle('seattle', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 23, 65, 6.3)
console.log(seettle);


seettle.Cookiesfun();
seettle.render();
// create table1:





    









//tokyo




function Tokyo(location, workingHours, min, max, avg) {
    this.location = location;
    this.workingHours = workingHours;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookies = [];
    this.customer = [];


}



Tokyo.prototype.Cookiesfun = function () {
    for (let i = 0; i < this.workingHours.length; i++) {
        this.cookies.push(Math.floor(Math.random() * (this.max - this.min) + this.min))
        console.log(this.cookies[i])
    }
}
Tokyo.prototype.render = function () {
    let h1El = document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent = 'Tokyo';
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < this.workingHours.length; i++) {
        let liEl = document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent = `${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
}





let tokyo = new Tokyo('seattle', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 23, 65, 6.3)
console.log(tokyo);


tokyo.Cookiesfun();
tokyo.render();

//Dubai


function Dubai(location, workingHours, min, max, avg) {
    this.location = location;
    this.workingHours = workingHours;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookies = [];
    this.customer = [];


}



Dubai.prototype.Cookiesfun = function () {
    for (let i = 0; i < this.workingHours.length; i++) {
        this.cookies.push(Math.floor(Math.random() * (this.max - this.min) + this.min))
        console.log(this.cookies[i])
    }
}
Dubai.prototype.render = function () {
    let h1El = document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent = 'Dubai';
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < this.workingHours.length; i++) {
        let liEl = document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent = `${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
}





let dubai = new Dubai('seattle', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 23, 65, 6.3)
console.log(tokyo);


dubai.Cookiesfun();
dubai.render();

//lima
function Lima(location, workingHours, min, max, avg) {
    this.location = location;
    this.workingHours = workingHours;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookies = [];
    this.customer = [];


}



Lima.prototype.Cookiesfun = function () {
    for (let i = 0; i < this.workingHours.length; i++) {
        this.cookies.push(Math.floor(Math.random() * (this.max - this.min) + this.min))
        console.log(this.cookies[i])
    }
}
Lima.prototype.render = function () {
    let h1El = document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent = 'Lima';
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < this.workingHours.length; i++) {
        let liEl = document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent = `${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
}





let lima = new Lima('seattle', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 23, 65, 6.3)
console.log(tokyo);


lima.Cookiesfun();
lima.render();
 


//table:

let table = document.createElement('table');
container.appendChild(table);
let tr1=document.createElement('tr');
table.appendChild(tr1);
let th = document.createElement('th');

tr1.appendChild(th);


for(let i=0;i<th.length;i++){
    let th=['name','6','7','8','9'];
    th.textContent=th[i];
}
