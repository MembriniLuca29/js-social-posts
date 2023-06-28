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
        "media": "https://fastly.picsum.photos/id/593/300/300.jpg?hmac=wyPh1WjUanAHdNW0I2tKYB3tjs2UvCLW07c2q-_1okg",
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
        "media": "https://fastly.picsum.photos/id/1063/300/300.jpg?hmac=BymgAm4r__1uWlA5D_pNyUYkFT-6jT4Or85ZwgzImtE",
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
        "media": "https://fastly.picsum.photos/id/755/300/300.jpg?hmac=duVK4VRPGNUS2erOrEbTmbTT1vIZp0F18gWWEeu-evc",
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
        "media": "https://fastly.picsum.photos/id/313/300/300.jpg?hmac=RF_9wjl0Ly5pOq_YONmPgRzw41FLVyOOxe1Vcjf_4YE",
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
    profileImg.src =authorImg["image"];
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

}