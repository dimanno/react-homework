
let url = 'https://jsonplaceholder.typicode.com/posts'
const getPosts = () => {
   return(fetch(url).then(value => value.json()))
}

const getPost = () => {
  return   fetch(url + '/id')
        .then(value => value.json())
}

const getCommentsOfPost = (id) => {
  return   fetch(url + '/' + id + '/comments')
        .then(value => value.json())
}
export {getPosts, getPost, getCommentsOfPost}