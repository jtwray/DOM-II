const lT=launchTime();
function launchTime() {
    let pos=0;
    let el=block;
    ( pos==350 )? ( clearInterval( lT )):( pos++, el.style.left=pos+'px';)
} 


function launchOnClick() {
    const blocksNodeList=d.querySelectorAll( ".block" );  
    const blockList=Array.from(blocksNodeList);
    let pos = 0;
    const id = setInterval(frame, 5);
    function frame() {
        if( pos==350 ) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }