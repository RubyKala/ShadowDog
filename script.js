let playerstate='idle';
const dropdown= document.getElementById('animations')
dropdown.addEventListener('change', function(e){
    playerstate= e.target.value;
})
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src='shadow_dog.png';
const spritewidth= 575;
const spriteheight= 523

let gameFrame=0;
const staggerFrame=5;
const spriteanimations =[];
const animationstate=[
    {
        name:'idle',
        frames: 7,
    },

    {
        name:'jump',
        frames: 7,
    },

    {
        name:'fall',
        frames: 7,
    },

    {
        name:'run',
        frames: 9,
    },

    {
        name:'dizzy',
        frames: 11,
    },

    {
        name:'sit',
        frames: 5,
    },

    {
        name:'roll',
        frames: 7,
    },

    {
        name:'bite',
        frames: 7,
    },

    {
        name:'ko',
        frames: 12,
    },

    {
        name:'gethit',
        frames: 4,
    },

];
animationstate.forEach((state, index)=>{
    let frames={
        loc:[],
    }
    for (let j = 0;j<state.frames;j++){
        let positionX = j*spritewidth;
        let positionY = index* spriteheight;
        frames.loc.push({x:positionX, y:positionY});
        
    }
    spriteanimations[state.name]=frames;
})
function animation(){
    ctx.clearRect(0,0, CANVAS_WIDTH,CANVAS_HEIGHT);
   //ctx.drawImage(image,sourcex, sy, swidth, sh, destinationx, dy, dw,dh)
   let position = Math.floor(gameFrame/staggerFrame) % spriteanimations[playerstate].loc.length;
  let frameX=spritewidth*position
  let frameY = spriteanimations[playerstate].loc[position].y;
   ctx.drawImage(playerImage, frameX,frameY, spritewidth,spriteheight, 0,0, spritewidth,spriteheight)
    

    gameFrame++;
    requestAnimationFrame(animation);
}
animation();