const previewContainer=document.getElementById('image_preview');
const previewImage=previewContainer.querySelector(".previewImageTag");
const previewDefaultText=previewContainer.querySelector(".image_preview_text");
const inpFile=document.getElementById('form_image');
inpFile.addEventListener('change',(e)=>{
   const file=e.target.files[0];
    if(file){
        const reader=new FileReader();
        reader.readAsDataURL(file);
        previewContainer.style.border="none"
        previewDefaultText.style.display="none";
        previewImage.style.display="block";
        reader.addEventListener("load",function(){
            previewImage.setAttribute("src",this.result);
        });
    }else{
        previewContainer.style.border=null;
        previewDefaultText.style.display=null;
        previewImage.style.display="none";
        previewImage.setAttribute("src","");
    }
});