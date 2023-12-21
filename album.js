const mainView = document.getElementsByClassName('main-list')[0];
const store = [];
fetch(' https://jsonplaceholder.typicode.com/photos')

    .then((pro) =>(pro.json()))
    .then( jso => {for(let i =0 ;i< 10 ;i++){
            store.push({title:jso[i].title, url: jso[i].url})
        }
     for(let i =0 ; i < store.length; i++){
    let newImage = document.createElement('li')
    newImage.className = 'card'
    newImage.innerHTML = (`
    <div>
        <img src='${store[i].url}' alt="image">
    </div>
    <div> 
        <h3> ${store[i].title}</h3>
    </div>
    <input type="button"value="del" class="del-icon" style="display:none;">
    <input type="button"value="edit" class="edit-icon " style="display:none;">    
`)
mainView.appendChild(newImage)

}
})
.catch(error => {
    console.error('Error fetching data:', error);
});

function addAlbum(title, im_url){
    newAlbum = document.createElement('li');
    newAlbum.className = 'card';

    newAlbum.innerHTML = (`
    <div>
        <img src='${im_url}' alt="image">
    </div>
    <div> 
        <h3> ${title}</h3>
    </div>
    <input type="button"value="del" class="del-icon" style="display:none;">
    <input type="button"value="edit" class="edit-icon " style="display:none;">
    `);
    mainView.appendChild(newAlbum);

    const postData = 
    {
        albumId: 1,
        id: 1,
        title: title,
        url: url,
        thumbnailUrl: url
    }

    fetch('https://jsonplaceholder.typicode.com/photos', {
      method: 'post',
      headers:{'content-type': 'application/json'},
      body:JSON.stringify(postData),
    }).then(res => res.json())
    .then(data => {
        console.log('post succusful:', data)
    })
    .catch(erro => {
        console.erro(
            'Error while making a post'
    )
    });
}

title = document.getElementById('title');
url = document.getElementById('url');
addAlb = document.getElementById('addAlb');
console.log(url.value);
addAlb. addEventListener
('click', function(){
    if (title.value === '' || url.value === ''){
        alert('Please fill in the title and url')
    }else{
        addAlbum(title.value, url.value);
    }

})

//after making delete buttun appear 
function ddel(place){
    mainView.removeChild(place);
    fetch('https://jsonplaceholder.typicode.com/photos/1 ', {
        method:'delete',
        
        
    }).then(re => re.json())
    .then(data => {
        if (data.ok === true){
            console.log('delete successful')
        }
        else{
            console.log('delete failed');
        }})
        .catch(error => { console.error('Error while deleting', error)});
}

delAlbum = document.getElementById('delAlb');
delAlbum.addEventListener('click', function(){
    editVals = document.getElementsByClassName('del-icon');
    let cur = editVals[0].style.display
    if (cur === 'none'){
        for (let i = 0; i < editVals.length; i++){
            editVals[i].style.display = 'block';
        }}
    else{
        for (let i = 0; i < editVals.length; i++){
            editVals[i].style.display = 'none';
        }
    }
    }
)

mainView.addEventListener('click', function(e) {
    if (e.target.classList.contains('del-icon')) {
      let todel = e.target.closest('li');
      if (todel) {
        ddel(todel);
      }
    }
  });
  

//edit cur album
function editAlbum(place){
    let newTitle = prompt('Please enter new title');
    let newUrl = prompt('Please enter new url');
    place.innerHTML = (`
    <div>
        <img src='${newUrl}' alt="image">
    </div>
    <div> 
        <h3> ${newTitle}</h3>
    </div>
    <input type="button"value="del" class="del-icon" style="display:none;">
    <input type="button"value="edit" class="edit-icon" style="display:none;">
    `);
    fetch('https://jsonplaceholder.typicode.com/photos/1 ', {
        method:'put',
        body: JSON.stringify({
            id: 1,
            title: newTitle,
            url: newUrl,
            thumbnailUrl: newUrl
        }),
        headers: {
            'content-type': 'application/json'
        }
        
    }).then(re => re.json())
    .then(data => {
        if (data.ok === true){
            console.log('edit successful')
        }
        else{
            console.log('edit failed');
        }})
        .catch(error => { console.error('Error while editing', error)});
}

edit = document.getElementById('changeAlb');
edit.addEventListener('click', function(){
    editVals = document.getElementsByClassName('edit-icon');
    let cur = editVals[0].style.display
    if (cur === 'none'){
        for (let i = 0; i < editVals.length; i++){
            editVals[i].style.display = 'block';
        }}
    else{
        for (let i = 0; i < editVals.length; i++){
            editVals[i].style.display = 'none';
        }
    }
    }
)

mainView.addEventListener('click', function(e) {
    if (e.target.classList.contains('edit-icon')) {
      let todel = e.target.closest('li');
      if (todel) {
        editAlbum(todel);
      }
    }
  });

  function addRand() {
    const randomId = Math.floor(Math.random() * 5000) + 1; // Ensure a valid ID
    const apiUrl = `https://jsonplaceholder.typicode.com/photos/${randomId}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            let newAl = document.createElement('li');
            newAl.className = 'card';
            newAl.innerHTML = (`
                <div>
                    <img src='${data.url}' alt="image">
                </div>
                <div> 
                    <h3> ${data.title}</h3>
                </div>
                <input type="button" value="del" class="del-icon" style="display:none;">
                <input type="button" value="edit" class="edit-icon" style="display:none;">    
            `);
            mainView.appendChild(newAl);
            console.log('Add successful');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


    
  
    aa = document.getElementById('addRand');
    aa.addEventListener('click',addRand );