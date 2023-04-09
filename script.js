const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let count = 0
let countCh = 0
let complete = []

function newTodo() {
  count = count + 1
  uncheckedCountSpan.innerText = count
  let ListIteam = document.createElement('li')
  //ListIteam.innerText = "new item"
  ListIteam.innerHTML = `<div style="justify-content:space-between" class="input" id="input">
                          
                          <div id="check"><input type="checkbox" id="checkbox" class="checkbox"></div>
                          <div id="label"><label id="put">New Item </label></div>
                          <div id="delete"><button type="button" onClick="DeleteToDo()">Delete</button>
                          
                        </div>`
  itemCountSpan.innerText = count
  
  //console.log(itemCountSpan.innerText + count)
  //alert('New TODO button clicked!')

  list.appendChild(ListIteam)  
  CheckBox()
}


//unChecked()

let chkArr = []
function CheckBox() {
  let CheckBxEl = document.getElementById('input')

  chkArr.push(CheckBxEl)
  console.log(chkArr)
  chkArr.forEach(el => {
         el.addEventListener('click',  (e)=>{ 
            console.log(e)
            e.checked = true

            uncheckedCountSpan.innerText = count - 1

        })

  })


}


// Delete task form list 
let DeleteBt = document.getElementById('delete')
function DeleteToDo(){
  let InputEnt = document.getElementById('input')
  InputEnt.remove()
  count = count - 1
  itemCountSpan.innerText = count

}


