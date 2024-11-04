let input = document.getElementById("input");
let list = document.querySelector("#list");
let add_btn = document.getElementById("add-btn");

function Add(){
    if(input.value == ""){
        alert("Please enter task");
    }
    else{
        let newEle = document.createElement('ul');
        newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        list.appendChild(newEle);
        input.value = "";
        newEle.querySelector("i").addEventListener("click" , remove);

        function remove(){
            newEle.remove();
        }
    }
}
add_btn.addEventListener("click" , Add);