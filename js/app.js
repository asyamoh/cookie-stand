'use strict';


let container = document.getElementById('container')
let seattle={
    min:23,
    max:65,
    avg:6.3,
    customer:[],
    cookies:[],
    total:0,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    updatingTheCookies:function(){
        // in order to have a randomValue between two numbers
        
        for(let i=0;i<this.workingHours.length;i++){
            let cookies=Math.floor(this.customer[i]*this.avg)
            console.log(cookies)
            this.cookies.push(cookies);
            this.total=this.total+this.cookies[i];
        }
     },
    
     
    
    
  

updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
        customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
        console.log(customer)
        this.customer.push(customer)
    }
console.log(this.customer)
},



render:function(){
    let h1El=document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent='seattle';
    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<this.workingHours.length;i++){
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
    let totalLi=document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent=`Total:${this.total}cookies`;
}
};

seattle.updatingTheCustomers();
seattle.updatingTheCookies();
seattle.render();


 //Tokyo

let Tokyo={
    min:3,
    max:24,
    avg:1.2,
    customer:[],
    cookies:[],
    total:0,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    updatingTheCookies:function(){
        
        
        for(let i=0;i<this.workingHours.length;i++){
            let cookies=Math.floor(this.customer[i]*this.avg)
            console.log(cookies);
            this.cookies.push(cookies);
            this.total=this.total+this.cookies[i];
        }
    },
  

updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
        customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
        console.log(customer)
        this.customer.push(customer)
    }
console.log(this.customer)
},
render:function(){
    let h1El=document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent='Tokyo';
    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<this.workingHours.length;i++){
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
    let totalLi=document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent=`Total:${this.total}cookies`;
}
};

Tokyo.updatingTheCustomers();
Tokyo.updatingTheCookies();
Tokyo.render();

//Dubai
let Dubai={
    min:11,
    max:38,
    avg:3.7,
    customer:[],
    cookies:[],
    total:0,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    updatingTheCookies:function(){
        // in order to have a randomValue between two numbers
        
        for(let i=0;i<this.workingHours.length;i++){
            let cookies=Math.floor(this.customer[i]*this.avg)
            console.log(cookies)
            this.cookies.push(cookies)
            this.total=this.total+this.cookies[i];
        }
    },
  

updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
        customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
        console.log(customer)
        this.customer.push(customer)
    }
console.log(this.customer)
},
render:function(){
    let h1El=document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent='Dubai';
    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<this.workingHours.length;i++){
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
    let totalLi=document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent=`Total:${this.total}cookies`;
},
};

Dubai.updatingTheCustomers();
Dubai.updatingTheCookies();
Dubai.render();

//Paris 
let Paris={
    min:20,
    max:38,
    avg:2.3,
    customer:[],
    cookies:[],
    total:0,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    updatingTheCookies:function(){
        // in order to have a randomValue between two numbers
        let score=0;
        for(let i=0;i<this.workingHours.length;i++){
            let cookies=Math.floor(this.customer[i]*this.avg)
            score+=this.updatingTheCookies
            console.log(cookies)
            this.cookies.push(cookies)
            this.total=this.total+this.cookies[i];
        }
    },
  

updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
        customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
        console.log(customer)
        this.customer.push(customer)
    }
console.log(this.customer)
},
render:function(){
    let h1El=document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent='Paris';
    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<this.workingHours.length;i++){
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
    let totalLi=document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent=`Total:${this.total}cookies`;
},
};

Paris.updatingTheCustomers();
Paris.updatingTheCookies();
Paris.render();


// lima 


let lima={
    min:2,
    max:16,
    avg:4.6,
    customer:[],
    cookies:[],
    total:0,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    updatingTheCookies:function(){
        // in order to have a randomValue between two numbers
        let score=0;
        for(let i=0;i<this.workingHours.length;i++){
            let cookies=Math.floor(this.customer[i]*this.avg)
            score+=this.updatingTheCookies
            console.log(cookies)
            this.cookies.push(cookies)
            this.total=this.total+this.cookies[i];
        }
    },
  

updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
        customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
        console.log(customer)
        this.customer.push(customer)
    }
console.log(this.customer)
},
render:function(){
    let h1El=document.createElement('h1');
    container.appendChild(h1El);
    h1El.textContent='lima';
    let ulEl=document.createElement('ul');
    container.appendChild(ulEl);
    for(let i=0;i<this.workingHours.length;i++){
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`
    }
    let totalLi=document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent=`Total:${this.total}cookies`;
},
};

lima.updatingTheCustomers();
lima.updatingTheCookies();
lima.render();





