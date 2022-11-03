let a = 16;
let b = 0, c;
const grid = document.querySelector(".grid");

for(let i = 0; i < a; i++){
    for (let j = 0; j < a; j++) {
        const div = document.createElement('div');
        div.classList.add("block");
        grid.appendChild(div);    
        div.setAttribute("onmouseover", "black(this)");
    }
}

function remove_Child(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

function sliderValue(value){
    a = value;
    remove_Child();
    document.querySelector(".slider").innerHTML=`grid size: ${value} X ${value}`;
    for(let i = 0; i < a; i++){
        for (let j = 0; j < a; j++) {
            const div = document.createElement('div');
            div.classList.add("block");
            grid.appendChild(div);    
            div.setAttribute("onmouseover", "black(this)");
        }
    }
    grid.style["grid-template-columns"] = `repeat(${value}, 1fr)`;   
}

function black(val){
    val.classList.add('grid-element');
    if(b === 0){
        val.style['background-color'] = 'black';
    }
    else if(b === 1){
        val.style['background-color'] =`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    }else if(b === 2){
        val.style['background-color'] =`rgba(0,0,0, ${c})`;
        if(c <= 10){
            c += .1;
        }
    }else{
        val.style['background-color'] ="white";
    }
}

function rgb(){
    b = 1;
}

function grayIntensify(){
    b = 2;
    c = 0.1;
}

function blackkk(){
    b = 0;
}

function removee(){
    b = 3
}