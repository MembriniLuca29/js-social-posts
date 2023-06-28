const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


for (let index = 0; index < posts.length; index++) {
    const element = posts[index];

    const authorImg = element["author"]

    const container = document.getElementById("container");

    const divPost = document.createElement("div");
    container.append(divPost);
    divPost.className = "post";

    const PostHeader = document.createElement("div");
    divPost.append(PostHeader);
    PostHeader.className = "post__header";

    const postMeta = document.createElement("div");
    PostHeader.append(postMeta);
    postMeta.className = "post-meta";

    const postMetaIcon = document.createElement("div");
    postMeta.append(postMetaIcon);
    postMetaIcon.className = "post-meta__icon";

    const profileImg = document.createElement("img");
    profileImg.src = authorImg["image"];
    postMetaIcon.append(profileImg);
    profileImg.className = "profile-pic";

    const postMetaData = document.createElement("div");
    postMeta.append(postMetaData);
    postMetaData.className = "post-meta__data";

    const postMetaAuthor = document.createElement("div");
    postMetaData.append(postMetaAuthor);
    postMetaAuthor.className = "post-meta__author";
    postMetaAuthor.innerHTML = authorImg["name"]

    const postMetaTime = document.createElement("div");
    postMetaData.append(postMetaTime);
    postMetaTime.className = "post-meta__time";
    postMetaTime.innerHTML = element["created"]

    const postText = document.createElement("div");
    divPost.append(postText);
    postText.className = "post__text";
    postText.innerHTML = element["content"]

    const postImage = document.createElement("div");
    divPost.append(postImage);
    postImage.className = "post__image";
    
    const img = document.createElement("img");
    img.src = element["media"];
    postImage.append(img);
    
    const postFooter = document.createElement("div");
    divPost.append(postFooter);
    postFooter.className = "post__footer";

    const likes = document.createElement("div");
    postFooter.append(likes);
    likes.className = "likes js-likes";

    const likesCta = document.createElement("div");
    likes.append(likesCta);
    likesCta.className = "likes__cta";

    const likeButton = document.createElement("a");
    likesCta.append(likeButton);
    likeButton.className = "like-button js-like-button";

    const likeButtonIcon = document.createElement("i");
    likeButton.append(likeButtonIcon);
    likeButtonIcon.className = "like-button__icon fas  fa-thumbs-up";

    const likeButtonLabel = document.createElement("span");
    likeButton.append(likeButtonLabel);
    likeButtonLabel.className = "like-button__label";
    likeButtonLabel.innerHTML = "Mi Piace";

    let likesInt = element["likes"];

    const likesCounter = document.createElement("div");
    likes.append(likesCounter);
    likesCounter.className = "likes__counter";
    likesCounter.innerHTML = "Piace a " 

    const likecounterB = document.createElement("b");
    likesCounter.append(likecounterB);
    likecounterB.className = "js-likes-conter";
    likecounterB.innerHTML = likesInt 

    const persone = document.createElement("span");
    likesCounter.append(persone);
    persone.innerHTML = " persone" ;

    likeButton.addEventListener("click",
    function () {
        likeButton.classList.add("like-button--liked");
        likecounterB.innerHTML = likesInt + 1
        id = element["id"]
        
        let likedId = [];
        likedId.push(id)
        console.log(likedId)
    },{once : true}
    )
    
}

    