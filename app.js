const getUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts';
const putURL = 'https://jsonplaceholder.typicode.com/posts/100';
const deleteURL = 'https://jsonplaceholder.typicode.com/posts/1';

const newData = {
    title: 'This is a new post',
    body: 'This is a new content post'
};

const updateData = {
    title: 'Updated post',
    body: 'This is an update post'
};

const http = new HttpLibrary();


// Get posts
http.get(getUrl)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Add post
http.post(postUrl, newData)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Update post
http.put(putURL, updateData)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Delete post
http.delete(deleteURL)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    