
function click_handler(){
    const new_task_input = document.getElementById("tweet_text")
    const new_task = (new_task_input.value)

    const new_list_item = document.createElement("li")
    new_list_item.innerText = new_task
    new_list_item.classList = "list-group-item d-flex justify-content-between align-items-center"

    // delete button
    const delete_button = document.createElement("button")
    delete_button.innerText = "Delete Tweet"
    delete_button.classList = "btn btn-danger btn-sm delete-button"
    delete_button.addEventListener("click",delete_task)
    new_list_item.appendChild(delete_button)
 
    // add new tweet to list
    const list = document.getElementById("tweet_list")
    list.insertBefore(new_list_item, list.firstChild);

    new_task_input.value = ""

}

const button = document.getElementById("tweetButton")
button.addEventListener("click", click_handler)

// delete button functionality
function delete_task(e){
    const button_clicked = e.target
    button_clicked.parentElement.remove()
}
