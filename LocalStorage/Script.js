let arr = JSON.parse(localStorage.getItem('Task')) ||  [];

window.addEventListener('load',()=>{
    ShowData(arr)
})


let form = document.getElementById('form')
form.addEventListener('submit',(e)=>{

    e.preventDefault();

    let taskName = document.getElementById('task').value
    let priority = document.getElementById('priority').value;

    let todo = {
        taskName,
        priority
    }
    
    arr.push(todo)

    let data = JSON.stringify(arr)
    localStorage.setItem('Task',data)
    ShowData(arr);
})

function ShowData(arr)
{
    document.querySelector('tbody').innerHTML = ''
    arr.forEach((el,index)=>{
        // console.log(el)
        
        let row = document.createElement('tr')
        let col1 = document.createElement('td')
        col1.innerText = el.taskName

        let col2 = document.createElement('td')
        col2.innerText = el.priority

        let col3 = document.createElement('td')
        col3.innerText = 'DELETE'

        col3.addEventListener('click',function (){
            deleteTask(el,index)
        })

        row.append(col1,col2,col3)

        document.querySelector('tbody').append(row)
    })
}
function deleteTask(el,index)
{
    arr.splice(index,1)
    console.log(arr)
    localStorage.setItem("todoList", JSON.stringify(arr));
    ShowData(arr)
}