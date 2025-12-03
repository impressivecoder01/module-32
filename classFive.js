// const loadPost = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data)
//         disPlayData(data)
//     })
// }

// const disPlayData = (posts) => {
//    const postContainer = document.getElementById('post-container')
   
//     posts.forEach(post => {
//         console.log(post.title)
//         const li = document.createElement('li')
//         li.innerText = post.title
//         postContainer.appendChild(li)
//     })
// }