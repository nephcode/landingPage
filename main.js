'use strict'


function getName (){
    if (localStorage.getItem('name')===null)
    {name.textContent='[Enter Name]';}
    else{name.textContent=localStorage.getItem('name')}

}

function setName (e){
if(e.type === 'keypress'){
    if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }
}else {
    localStorage.setItem('name', e.target.innerText);
}
}



function getFocus (){
    if (localStorage.getItem('focus')===null)
    {focus.textContent='[Enter focus]';}
    else
    {focus.textContent=localStorage.getItem('focus')}

}


function setFocus (e){
    if(e.type === 'keypress'){
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
    }


name.addEventlistener('keypress',setName);
name.addEventlistener('blur',setName);
focus.addEventlistener('keypress',setFocus);
focus.addEventlistener('blur',setFocus);