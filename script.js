let form = document.getElementById('addForm')

form.addEventListener('submit' , addItem)
let lists = document.getElementById('items')

lists.addEventListener('click' , handleClick)
//      <button type="button" class="btn btn-primary btn-sm mx-2">edit</button>
function addItem(e){
    e.preventDefault();
    if(e.target.firstElementChild.value.length !== 0){

    
    let li = document.createElement('li')
    li.className ='list-group-item'
    li.appendChild(document.createTextNode(e.target.firstElementChild.value))
    let div = document.createElement('div')
    div.className= 'float-right'
    let edit = document.createElement('button')
    edit.className = 'btn btn-primary btn-sm mx-2'
    edit.textContent = "edit"
    div.appendChild(edit)
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm delete'
    deleteBtn.textContent ='X'
    div.appendChild(deleteBtn)
    li.appendChild(div)
    lists.appendChild(li)
    console.log(li)
}
}

function handleClick(e){
    if(e.target.classList.contains('delete')){

        let li  = e.target.parentNode.parentNode
        lists.removeChild(li)
    }
}
