const inputBox = document.querySelector('.inputBox');
const addBtn = document.querySelector('.addBtn');
const taskContainer=document.querySelector('.task-container')

addBtn.addEventListener('click', function () {
    if (inputBox.value === '') { 
    alert('You Must Enter Something')
}
    else { 
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        list.classList.add('tasks');
        taskContainer.appendChild(list);
        
        let closeBtn = document.createElement('span');
        closeBtn.innerText = '\u00d7'  
        closeBtn.classList.add('close-btn')
        list.append(closeBtn);
    }
    inputBox.value = '';
    saveData(); //function to save the data that has been stored


})
taskContainer.addEventListener('click', function (e) {
    
    if (e.target.tagName === 'LI')
    //the tag names should be returned with uppercase
    {
        e.target.classList.toggle('checked');
        //toggle property give and take the classlist checked
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem('data',taskContainer.innerHTML)
}

function showTask() {
    
    taskContainer.innerHTML = localStorage.getItem('data');
}
showTask();




