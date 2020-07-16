function getComments(){
    fetch('/get-comment').then(response=>response.json()).then((comments)=>{
        const commentElement = document.getElementById('message');
        commentElement.innerHTML = '';
        comments.forEach((comment)=>{
            commentElement.appendChild(
                createListElement(comment.Name+': ' + comment.Message));
        })
    })
}

function createListElement(text) {
    const listElement = document.createElement('li');
    listElement.innerText = text;
    return listElement;
}