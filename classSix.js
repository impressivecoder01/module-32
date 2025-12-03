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
//    postContainer.innerHTML = ''
//     posts.forEach(post => {
//         const postCard = document.createElement('div');
//         postCard.innerHTML = `
//         <div  class="post-card">
//             <h1>${post.title}</h1>
//             <p>${post.body}</p>

//         </div>
//         `
//         postContainer.appendChild(postCard)
//     })
// }
// loadPost()