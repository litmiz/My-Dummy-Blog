// Load 10 first posts 
fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
response.json().then(data => {
    postArr = data;
    loadPosts();
}));
///////////////////////////////////////////////////////////


// Load Comments 
function showComm(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(response =>
    response.json().then(data => {
        data.forEach(element => {
            document.getElementById(`commPost${postId}`).innerHTML += `
            <p>${element.name}</p>
            <p>${element.email}</p>
            <p>${element.body}</p>
            <hr class="commLine">
            `
        });
    }));
}
///////////////////////////////////////////////////////////


// Load 10 posts
document.getElementById("loadBtn").addEventListener("click", function () {
    loadPosts();
});

lastPost = 0;

function loadPosts() {
    let i;
    for (i = lastPost; i < lastPost + 10; i++) {
        document.getElementById('postsArea').innerHTML += `
        <h3>${postArr[i].title}</h3>
        <p>${postArr[i].body}</p>
        <button onclick="showComm(${postArr[i].id})">Show Commants</button>
        <div id="commPost${postArr[i].id}"></div>
        <hr class="postLine">
        `
    }
    lastPost = i;
}
///////////////////////////////////////////////////////////