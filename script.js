let input = document.querySelector('#input-text');
let addItem = document.querySelector('.form .bx');
let list = document.querySelector('#list');
let completed = document.querySelector('.completed-task');
let complete = document.querySelector('.completed-list');
let nothing = document.querySelector('.form .nothing');
let clear = document.querySelector('.clear');




nothing.style.display = "block";
completed.style.display = "none";

addItem.addEventListener('click', () => {
    if(input.value != ""){
        nothing.style.display = "none";
        let li = document.createElement('li');
        let select = document.createElement('input');
        let item = document.createElement('p');

        li.className = "lists";
        item.className = 'para';

        select.setAttribute('type' , 'checkbox');

        list.appendChild(li);
        li.appendChild(select);
        li.appendChild(item);

        let text = input.value;
        item.innerText =  text;
        input.value = "";
        
        select.addEventListener('click' , (e) => {
            // let block = e.target.parentElement.parentElement;
            let remove = e.target.parentElement;
            list.removeChild(remove);

            item.innerText = text;

            completed.style.display = "block";
            nothing.style.display = "block";

            if(list.childElementCount !== 0){
                nothing.style.display = "none";
            }
            complete.appendChild(li);
            li.appendChild(select);
            li.appendChild(item);

            
            select.addEventListener('click' , () => {

                if(list.childElementCount === 0){
                    nothing.style.display = "none";
                }
                list.appendChild(li);
                li.appendChild(select);
                li.appendChild(item);

                if(complete.childElementCount == 0){
                    completed.style.display = "none";
                }else{
                    completed.style.display = "block";
                }
            })
        })

        clear.addEventListener('click' , () => {
            while(list.childElementCount !== 0 ){
                list.removeChild(li);
            }

            while(complete.childElementCount !== 0){
                complete.removeChild(li);
            }
            completed.style.display = "none";
        })
        
    }
})

