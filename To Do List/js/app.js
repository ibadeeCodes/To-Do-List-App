//==================TODO Code======================================================//

//======Catching classes & id's========//

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//======classes names==========//

const CHECK = "check_box";
const UNCHECK = "check_box_outline_blank";
const DELETE = "delete";
const LINE_THROUGH = "LineThrough";
const EDIT="create";

//=======variables=========//
let LIST=[] , id=0;

//dates//
const options = {weekday:"long",month:"short",day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//======Add to do function========//

function addToDo(toDo,id,done,trash) {

    if(trash){
        return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `  <li class="item">
                        <div class="row">
                            <div class="col s2">
                                <a class="#000000 black-text"><i class="material-icons" job="complete" id="${id}">${DONE}</i></a>
                            </div>   
                            <div class="col s6">
                                <p class="text ${LINE}">${toDo}</p>
                            </div>  
                            <div class="col s2">
                                <a><i class="material-icons right-align #000000 black-text darken-1" job="edit" id="${id}">${EDIT}</i></a>
                            </div>  
                            <div class="col s2">
                                <a><i class="material-icons right-align #e53935 red-text darken-1" job="delete" id="${id}">${DELETE}</i></a>
                            </div>   
                        </div>
                    </li>    
                    `;

    const position = "beforeend";

    list.insertAdjacentHTML(position,item);
}

document.addEventListener("keyup", function(even){
    if( event.keyCode == 13 ) {
        const toDo = input.value;
        if(toDo){
            addToDo(toDo,id,false,false);

            LIST.push({
                name:toDo,
                id:id,
                done:false,
                trash:false
            });

            id++;

            console.log(id);
        }
        input.value = "";
    }
});

function completeToDo (element) {
    if(element.innerHTML == CHECK){
        element.innerHTML = UNCHECK;
        
    element.parentNode.querySelector(".text").classList.toggle(LineThrough);
    LIST[element.id].done = LIST[element.id].done ? false : true;
    
    }
    else if(element.innerHTML == UNCHECK){
        element.innerHTML = CHECK;
        
    element.parentNode.querySelector(".text").classList.toggle(LineThrough);
    LIST[element.id].done = LIST[element.id].done ? false : true;
    }

}


clear.addEventListener("click",function(){
    document.location.reload(true);
});

function removeToDo (element) {
    element.parentNode.parentNode.parentNode.remove(element.parentNode);
    LIST[element.id].trash = true;
}

list.addEventListener('click',function(event){
    const element = event.target;
    elementJob = element.attributes.job.value;
    if(elementJob == "delete"){
        removeToDo(element);        
    }
    else if(elementJob == "complete") {
        completeToDo(element);
    }
    else if(elementJob == "edit") {
        alert("Do you want to edit the selected todo?");
    }
});



