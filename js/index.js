const d=document;

const navLinks=d.querySelector( " div > nav" );
navLinks.addEventListener( 'click', (e) => {
    e.preventDefault();
} )
const funNSunh4=d.querySelector("section.content-pick > div:nth-child(1) > h4")
const mtnExcrsn=d.querySelector("section.content-pick > div:nth-child(2) > h4")
const isLandgetAway=d.querySelector("section.content-pick > div:nth-child(3) > h4")
const contentpick=d.querySelector( "section.content-pick");
const boat=d.querySelector( "body > div > section.content-destination > img" );
const createClass=( name, rules ) => {
    let style=d.createElement( 'style' );
    style.type='text/css';
    d.getElementsByTagName( 'head' )[0].appendChild( style );
    if(( !style.sheet||{} ).insertRule())
    ( style.styleSheet||style.sheet ).addRule( name, rules );
    else
    (style.sheet.insertRule( name+"{"+rules+"}", 0 ));
}
boat.addEventListener(
    'click', ( e ) => {boat.style.border="30px solid pink"})
 
// for node in nodeList addEventlistener if event is Clicked 
// , fire arrow function to raise a modal with a form to capture 
// contact info for the 'patron';

// let modelBtnModalFly=() => {
//     modalBtnNodeList.forEach( node )=> {
//         return (
//             node.addEventListener('click',)
//             )
//         }
//     }
    // 
    // let modalBtn=d.querySelectorAll( '.btn' )
// ^returns nodeList of all signemeup Buttons
    // d.querySelector( ".btn" ).previousElementSibling.previousElementSibling.textContent
// returns destination listed in h4 above each button to preload in contact form on modal pop   
// {"fun in the sun"|"mountain Excursion"|"Island Getaway"} 