let input = document.querySelector('#input-text');
let addItem = document.querySelector('.form .bx');
let list = document.querySelector('#list');
let completed = document.querySelector('.completed-task');
let complete = document.querySelector('.completed-list');
let nothing = document.querySelector('.form .nothing');
nothing.style.display = "block";
completed.style.display = "none";

addItem.addEventListener('click', () => {
    if(input.value != ""){
        nothing.style.display = "none";
        let li = document.createElement('li');
        let select = document.createElement('input');
        let item = document.createElement('p');

        li.className = "lists";
        item.className = 'para'

        select.setAttribute('type' , 'checkbox');

        list.appendChild(li);
        li.appendChild(select);
        li.appendChild(item);

        item.innerText =  input.value;
        input.value = "";
        
        select.addEventListener('click' , (e) => {
            // let block = e.target.parentElement;
            let remove = e.target.parentElement;
            list.removeChild(remove);
            // if(block.classList.contains('lists') == -1){
            //     nothing.style.display = "block";
            // }

            completed.style.display = "block";
            nothing.style.display = "block";
            complete.appendChild(li);
            li.appendChild(select);
            li.appendChild(item);

            completed.addEventListener('click' , () => {
                list.appendChild(li);
                li.appendChild(select);
                li.appendChild(item);
                nothing.style.display = "none";
            })
        })
        
    }
})