const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postListEl = document.getElementById("post-list")
appendToPostListEl()

function appendToPostListEl() {
    for(let i = 0; i < posts.length; i++) {
        let newEl = document.createElement("section") 
        newEl.innerHTML = `<div class="top-container">
                        <img class="avatar" src="${posts[i].avatar}" alt="user avatar">
                        <div class="post-user-details">
                            <p class="post-user-name">${posts[i].name}</p>
                            <p class="post-user-place">${posts[i].location}</p>
                        </div>
                    </div>
                    <img class="user-main-post" src="${posts[i].post}" alt="user post">
                    <div class="bottom-container">
                        <img class="btn" src="images/icon-heart.png" alt="heart button">
                        <img class="btn" src="images/icon-comment.png" alt="comment button">
                        <img class="btn" src="images/icon-dm.png" alt="dm button">
                    </div>
                    <p class="like-count">${posts[i].likes} likes</p>
                    <p class="user-comment"><span>${posts[i].username}</span> ${posts[i].comment}</p>`
        postListEl.append(newEl)
        
        const userMainPostEl = newEl.querySelector(".user-main-post");
        const likeCountEl = newEl.querySelector(".like-count");

        userMainPostEl.addEventListener("click", function() {
            if (posts[i].liked) {
                posts[i].likes--;
            } else {
                posts[i].likes++;
            }
            posts[i].liked = !posts[i].liked;
            likeCountEl.textContent = `${posts[i].likes} likes`
        })
    }
}