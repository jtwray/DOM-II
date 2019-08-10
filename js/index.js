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
boat.addEventListener(
    'drag/drop', ( e ) => {boat.style.border="30px solid pink"})
funNSunh4.addEventListener(
    'click', ( e ) => {funNSunh4.style.border="30px solid red";
        e.stopPropagation()});
        
boat.addEventListener(
    'dblclick', ( e ) => {boat.style.border="30px solid pink"})
funNSunh4.addEventListener(
    'wheel', ( e ) => {funNSunh4.style.color=" red"} )
        

mtnExcrsn.addEventListener(
    'mouseover', ( e ) => {mtnExcrsn.style.color="purple";
event.stopPropagation();});
navLinks.addEventListener(
        'focus', ( e ) => {mtnExcrsn.style.opacity=".50"} )

isLandgetAway.addEventListener(
    'resize', ( e ) => {isLandgetAway.style.width="30%"} );
isLandgetAway.addEventListener(
     'drag/drop', ( e ) => {isLandgetAway.style.color="redorange"} ) 
contentpick.addEventListener(
    'mouseover', ( e ) => {contentpick.style.border="double chartreuse 10px"} );
contentpick.addEventListener(
    'dblclick', ( e ) => {contentpick.style.border="solid chartreuse 50px"} );
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
        event.stopPropagation();
    
     });
    
     mainNav2.addEventListener('dblclick', function(event) {
        alert(`{{<form><input type="text" name="name"/></form>}}`);
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
                                // const createClass=( name, rules ) => {
                                //     let style=d.createElement( 'style' );
                                //     style.type='text/css';
                                //     d.getElementsByTagName( 'head' )[0].appendChild( style );
                                //     if(( !style.sheet||{} ).insertRule())
                                //     ( style.styleSheet||style.sheet ).addRule( name, rules );
                                //     else
                                //     (style.sheet.insertRule( name+"{"+rules+"}", 0 ));
                                // }