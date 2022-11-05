const cards = document.querySelectorAll('.card');
const screen = document.getElementById('cardcontainer');
const button = document.getElementById('seemore');

button.addEventListener('click', seemore);

screen.innerHTML = '';
let generatedCards = [];
let allowedClicks = 3;

function check(id) {
    let check = false;

    for(let i = 0; i < generatedCards.length; i++) {

        if(parseInt(generatedCards[i].id) === id) {
            check = true;
            break;
        }
    }

    return check;
}

function seemore () {

    if(allowedClicks === 0) {
        return;
    }

    for (let i = 0; i < 3; i++) {
        let id = Math.floor(Math.random() * 9);
        let random = cards[id]; 

        if(check(id)) {
            while(check(id)) {
                id = Math.floor(Math.random() * 9);
                random = cards[id];
            }

            generatedCards.push(random);
        } else {
            generatedCards.push(random);
        }
        
        screen.appendChild(random);
    }

    allowedClicks--;
}

