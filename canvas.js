function draw(){
    const canvas=document.getElementById("canvas_element");
    const ptr=canvas.getContext('2d');
    var flag=true;
    ptr.beginPath();
    ptr.fillStyle='rgba(0,0,200,0.5)';
    ptr.fillRect(20,50,100,100);
    
    ptr.beginPath();
    ptr.fillStyle='rgba(0,0,200,0.5)';
    ptr.fillRect(40,75,100,100);
    ptr.stroke();
    
    canvas.addEventListener('click',(e)=>{
        e.preventDefault();
        if(flag)
        {
            canvas.style.backgroundColor='red';
            flag=false;
        }
        else{
            canvas.style.backgroundColor='yellow';
            flag=true;         
        }
        ptr.stroke();
        console.log('clicked');
    });
}