const previewContainer=document.getElementById('image_preview');
const previewImage=previewContainer.querySelector(".previewImageTag");
const previewDefaultText=previewContainer.querySelector(".image_preview_text");
const inpFile=document.getElementById('form_image');
var imageFile;
var fileFlag=false;
inpFile.addEventListener('change',(e)=>{
   const file=e.target.files[0];
    if(file){
        fileFlag=true;
        const reader=new FileReader();
        reader.readAsDataURL(file);
        previewContainer.style.border="none"
        previewDefaultText.style.display="none";
        previewImage.style.display="block";
        reader.addEventListener("load",function(){
            previewImage.setAttribute("src",this.result);
        });
        imageFile=reader;
    }else{
        fileFlag=false;
        previewContainer.style.border=null;
        previewDefaultText.style.display=null;
        previewImage.style.display="none";
        previewImage.setAttribute("src","");
    }
});
const submitButton=document.getElementById('submit_button');
var canvas = document.getElementById('viewport'),
context = canvas.getContext('2d');
function make_base()
{
   base_image = new Image();
   base_image.src = imageFile.result;
   base_image.onload = function(){
    context.drawImage(base_image, 0, 0);
  }
console.log(imageFile.result);
}

submitButton.addEventListener('click',()=>{
    if(fileFlag)
        make_base();
});