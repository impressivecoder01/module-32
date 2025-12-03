// recap fetch() & send and console each data
const loadPost = ()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        disPlayPost(data)
    })
}

const disPlayPost = (posts) => {
    posts.forEach(post => {
        console.log(post)
    })
}