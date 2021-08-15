
let url = 'https://jsonplaceholder.typicode.com/posts'
const getPosts = () => {
   return(fetch(url).then(value => value.json()))
}

const getPost = (id) => {
    fetch(url + '/id')
        .then(value => value.json())
}

function getCommentsOfPost(postId) {
    fetch(url + '/comments?postId')
        .then(value => value.json())
}

export {getPosts, getPost, getCommentsOfPost}