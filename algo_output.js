const arc1topStartAngle=0;
const arc1topEndAngle=Math.PI*1/2;
const arc1bottomStartAngle=Math.PI*1;
const arc1bottomEndAngle=Math.PI*1.5;

const arc2topStartAngle=Math.PI*0.5;
const arc2topEndAngle=Math.PI*1;
const arc2bottomStartAngle=Math.PI*1.5;
const arc2bottomEndAngle=Math.PI*0;

const canvas=document.getElementById('algo_canvas');
const ptr=canvas.getContext('2d');

const h=100;
const w=100;

canvas.height=200;
canvas.width=200;
var display_type='fill';
var display_rect=true;

display_rect=document.getElementById('hide_rectangle');
display_rect.addEventListener('click',(e)=>{
    display_rect=e.target.checked;
})    

var formData = document.getElementById("form_data");
formData.addEventListener('submit',(e)=>{
    e.preventDefault();
    const heightVal=document.getElementById('height').value;
    const widthVal=document.getElementById('width').value;
    const type=document.getElementById('shape_type').value;
    display_rect=false;
    display_type=type;
    setHeightWidthOfCanvas(heightVal,widthVal);
    draw();
})

function setHeightWidthOfCanvas(h,w){
    canvas.height=h;
    canvas.width=w;    
}

function testFunc(){
    console.log('test func working');
}

function draw(){    
    // patternDraw(ptr,h,w);
    // drawRectangle(ptr,0,0,h,w);
    // drawAnArc1(ptr,0,0,40,arc1topStartAngle,arc1topEndAngle);
    // drawAnArc1(ptr,w,h,40,arc1bottomStartAngle,arc1bottomEndAngle);


    // drawRectangle(ptr,100,0,h,w);
    // drawAnArc2(ptr,200,0,40,arc2topStartAngle,arc2topEndAngle);
    // drawAnArc2(ptr,w,h,40,arc2bottomStartAngle,arc2bottomEndAngle);
    patternDraw(canvas,ptr,w,h);
}


function drawRectangle(ptr,x,y,width,height){
    //DRAW A RECTANGLE
    ptr.beginPath();
    ptr.rect(x,y,width,height);
    ptr.stroke();
    ptr.closePath(); 
}

function drawAnArc1(ptr,x,y,radius,startAngle,endAngle){
    ptr.beginPath();
    ptr.arc(x,y,radius,startAngle,endAngle);
    // ptr.fill();
    display_type=='stroke'?ptr.stroke():ptr.fill();
    //ptr.stroke();
    ptr.closePath();
}


function drawAnArc2(ptr,x,y,radius,startAngle,endAngle){
    ptr.beginPath();
    ptr.arc(x,y,radius,startAngle,endAngle);
    // ptr.fill();
    display_type=='stroke'?ptr.stroke():ptr.fill();
    ptr.closePath();
}


function patternDraw(canvas,ptr){
    var s=100;
    for (let x=0;x<canvas.width;x+=s){
        for(let y=0;y<canvas.height;y+=s){
            drawRectangle(ptr,x,y,h,w);
            if (0.5 >= Math.random()) 
            {
                drawAnArc1(ptr,x,y,50,arc1topStartAngle,arc1topEndAngle);
                drawAnArc1(ptr,x+w,y+h,50,arc1bottomStartAngle,arc1bottomEndAngle);        
            }
            else
            {
                drawAnArc2(ptr,x+w,y,50,arc2topStartAngle,arc2topEndAngle);
                drawAnArc2(ptr,x,y+h,50,arc2bottomStartAngle,arc2bottomEndAngle);                   
            }
        }
    }
}
