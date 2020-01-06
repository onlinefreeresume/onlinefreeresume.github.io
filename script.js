
const inputText=document.getElementById('input-text');
const saveBtn=document.getElementById('save-btn');
const finalText=document.getElementById('insta-text');


saveBtn.addEventListener('click',function(){
  // console.log();
  finalText.innerHTML=inputText.value
})
