const posts =

    [
        { title: 'Post one', body: 'This is post one', createdAt: new Date().getTime() },
        { title: 'Post two', body: 'This is post two', createdAt: new Date().getTime() }

    ];
    function getPosts()
    {
        setTimeout(() => 
        {
            let output = '';
            posts.forEach((post , index) => 
            {
                output+= `<li>${post.title} updated at  ${(new Date().getTime() - post.createdAt)/1000}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
    }
    
    function createPost(post){
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        const error = false;
        if(!error){
            resolve()
        } else{
            reject('Error: Something went wrong')
        }
    }, 1000);            
});
}
const user = {
    username: 'Vishwanath',
    LastActivityTime : '12th of December'
}

function updateLastActivityTime() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        user.LastActivityTime =  new Date().getTime();
        resolve(user.LastActivityTime)
    }, 1000);
  });
}

function deletePost(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                console.log(posts)
                resolve(posts.pop());
            }
            else{
                reject("No elements present");
            }
        },1000);
    });
}

createPost({title : 'Post three' , body : 'This is post three'})
.then(()=>{
   console.log("test")
    getPosts()
    deletePost().then((deletedElement)=>{
        console.log(deletedElement)
        getPosts()
        deletePost().then(()=>{
            getPosts()
            deletePost().then(()=>{
                getPosts()
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('Inside catch block', err);
                })
            }).catch((err) => {})
        }).catch((err) => {})
    }).catch((err) => {})
})
.catch(err=>console.log(err))