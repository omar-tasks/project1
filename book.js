let form = document.getElementById('form');
let pop = document.getElementById('popup');
let result = document.getElementById('result');
let bodyMadrob = document.querySelector('.body-madrob');

//local storage : 
let localname = localStorage.getItem('name');
let localage = localStorage.getItem('age');
let localhour = localStorage.getItem('hours');
let localphone = localStorage.getItem('phone');

if(localname && localage && localhour && localphone ) {
    form.name.value = localname;
    form.age.value = localage;
    form.hours.value = localhour;
    form.phone.value = localphone;
}

let drinkprice = 0.5;
let hotprice = 1;
let snakeprice = 0.25;
let hookaprice = 3;

form.addEventListener('submit', calculation);

function calculation (event) {
    event.preventDefault();
    
    let name = event.target.name.value;
    let age = event.target.age.value;
    let hours = event.target.hours.value;
    let phone = event.target.phone.value;

    let drink = event.target.drink.checked;
    let hot = event.target.hot.checked;
    let snack = event.target.snack.checked;
    let hooka = event.target.hooka.checked;    
    
    if (age < 18) {
        let sorry = document.createElement('h2');
        sorry.textContent = '  ⚠️  ' + '  Oh sorry the place is only for +18 age' + ' ⚠️ ';
        pop.appendChild(sorry);
        bodyMadrob.classList.add('blur');
    } else { 
        let totalHours ='Total hours and its price: ' + hours + 'hours  ......... ' +  (hours * 3) + 'JD';        
        
        if (!drink) {
            drinkprice = 0;
        }

        if (!hot) {
            hookaprice = 0;
        }

        if (!snack) {
            snakeprice = 0; 
        }

        if (!hooka) {
            hookaprice = 0;
        }

        let food = (drinkprice + hotprice + snakeprice + hookaprice);
        let othersprice = 'Eats price:.........  ' + food;
        let totalprice =  food + (hours * 3) ;
        
        let discount = 0;
        if(totalprice > 15) {
            discount = (totalprice * 0.75) ;
        } else {
            discount = 'if your invoice more than 15JD you\'ll take 25% discount'
        }

        let disprice = 'Total amount after discount: ' + discount;

        let top = document.createElement('h1');
        top.textContent = 'You\'r booking detalis : ' ;
        result.appendChild(top);

        let first = document.createElement('h6');
        first.textContent = 'Mr :' + name;
        result.appendChild(first);

        let second = document.createElement('h6');
        second.textContent = totalHours;
        result.appendChild(second);

        let third = document.createElement('h6');
        third.textContent = othersprice;
        result.appendChild(third);

        let fourth = document.createElement('h6');
        fourth.textContent = 'Total price : .........' + totalprice;
        result.appendChild(fourth);

        let fifth = document.createElement('h6');
        fifth.textContent = disprice;
        result.appendChild(fifth);
    }

    localstorage(name, age, hours, phone);
}


function localstorage (name, age, hours, phone) {

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('hours', hours);
    localStorage.setItem('phone', phone);
}
