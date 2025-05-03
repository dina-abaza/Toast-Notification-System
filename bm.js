let toastbox=document.getElementById('toastbox');
let successmsg='successfully submitted';
let errormsg='please fix the error!';
let invalidmsg='invalid input, check again';

function showtoast(msg){
    let toast= document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML= msg;
    toastbox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error')
    }
    if(msg.includes('invalid')){
        toast.classList.add('invalid')
    }

    setTimeout(()=>{
        toast.remove();
    },6000)
}
