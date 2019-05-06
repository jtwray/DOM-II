let navButtons = document.querySelector('body > header > div > nav ');

let navButtonsss = document.querySelectorAll(' nav a');
navButtonsss.forEach(function(element) {
    element.addEventListener('click', function() {
        event.preventDefault();
    });
});

let btn1 = document.querySelector("body > div > section.content-pick > div:nth-child(3) > div")
let btn1Container = document.querySelector("body > div > section.content-pick > div:nth-child(3)");

let mainNav2 = document.querySelector('.main-navigation');

let paragraph3 = document.querySelector('p');

let h2_4 = document.querySelector('h2');


let busimg5 = document.querySelector('body > div > header > img');

let sectionTitle6 = document.querySelector('body > div > section.content-section.inverse-content > div.text-content > p:nth-child(2)');

let funImg7 = document.querySelector('body > div > section.content-section.inverse-content > div.img-content > img');

let destinationImg8 = document.querySelector('body > div > section.content-destination > img');

let btn2_9 = document.querySelector('body > div > section.content-pick > div:nth-child(1)');

let btmMtnExcrsn10 = document.querySelector(
    'body > div > section.content-pick > div:nth-child(2) > h4.main-navigation'
);
let h2Letsgo11 = document.querySelector('body > div > section:nth-child(2) > div.text-content > h2');

btn1.addEventListener('mousedown', (event) => {
    event.target.style = 'color:crimson; ';
});
btn1.addEventListener('click', (event) => {
    event.target.style = 'opacity:0;';
});
btn1.addEventListener('dblclick', (event) => {
    event.target.style = 'color:green; height:10%';
    eventObject.stopPropagation();

});

mainNav2.addEventListener('dblclick', function(event) {
    alert('Ow that hurt');
});

paragraph3.addEventListener('mouseup', (event) => {
    event.target.style = 'font-size: 4rem; left: -5 in; position: relative;';
});
paragraph3.addEventListener(
    'mouseover',
    function(event) {
        event.target.style.color = 'orange';
        setTimeout(function() {
            event.target.style.color = '';
        }, 500);
    },
    true
);

btn2_9.addEventListener('click', (event) => {
    event.target.style = `position : absolute; left:-940 px;`;
});


h2Letsgo11.addEventListener('keypress', (event) => {
    event.target.style.opacity = '50%';
});

window.addEventListener('resize', (event) => {
    destinationImg8.style.width = '60px';
});

funImg7.addEventListener('click', (event) => {
    event.target.style.display = 'hidden';
});

h2_4.addEventListener('mousemove', (event) => {
    sectionTitle6.style = 'font-size:Math.floor((Math.random() * 8) + 3)+"px"; position: inherit;';
});


destinationImg8.addEventListener('mouseleave', (event) => {
    event.target.style.scope = 2;
});

busimg5.addEventListener('mouseout', (event) => {
    event.target.style = 'color:orange; border: 7px double yellow; ';
});


btn1Container.addEventListener('dblclick', (event) => {
    event.target.style = `border:10px solid brown;`;


});

h2Letsgo11.addEventListener('click', (event) => {
    event.target.style = `background-color:pink;`;
});