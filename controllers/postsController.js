import { getData, writeData, updatePost } from '../data.js';

// started with this, before we created a db.json with LowDB
// let posts = [
//     { id: 1, content: "Hello" },
//     { id: 2, content: "This is two" },
//     { id: 3, content: "Lorem ipsum" },
// ];

export function postsGet(req, res) {
    const data = getData();
    res.json(data.posts);
}

export function postsPost(req, res) {
    const post = req.body;
    post.id = Math.round(Math.random() * 9999);

    const data = getData();
    data.posts.push(post);
    writeData(data);

    res.status(201);
    res.json(post);
}

// Skinny Controller (BE), Fat Model (DB)
export function postsPut(req, res) {
    // we need the ID of the post to update
    const id = parseInt(req.params.id);

    updatePost(id, req);
    
    // this in Joels code is not working
    // res.json(updatedData);
    res.json(req.body);
}

// Fat Controller (BE), Skinny Model (DB)
export function postsDelete(req, res) {
    // we need the ID of the post to delete
    const id = parseInt(req.params.id);
    const data = getData();

    // data.posts.id = id;
    // in the posts array only those get filtered into, that have a different id than the one you're trying to delete
    data.posts = data.posts.filter(post => parseInt(post.id) !== id);
    writeData(data);

    res.json({ "deleted": id });
}