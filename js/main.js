var siteNameInput=document.getElementById('siteName');
var siteUrlInput=document.getElementById('siteUrl');

let list=[]

if(localStorage.getItem('allSites')!=null){
  list=JSON.parse(localStorage.getItem('allSites'))
  displaySite();
}


function addSites(){
    var sites={
        name:siteNameInput.value,
        url:siteUrlInput.value,
    }
    
    list.push(sites);
    
    displaySite();

    localStorage.setItem('allSites',JSON.stringify(list));


    clear();
}


function displaySite(){
  var cartona=''
    for(i=0;i<list.length;i++){
        cartona+=`
         <tbody>
          <tr>
            <th  scope="row">${i+1}</th>
            <td >${list[i].name}</td>
            <td><button class="btn btn-success">
              <i class="fa-solid fa-eye"></i>
              <span>visit</span>
            </button></td>
            <td>
            <button onclick="deleteItem(${i})" class="btn btn-danger">
              <i class="fa-regular fa-trash-can"></i>
              <span>delete</span>
            </button></td> 
           </tr>
        
        </tbody>
        `
        
    }

    document.getElementById("data").innerHTML = cartona;
   
}


function clear(){
  siteNameInput.value='';
  siteUrlInput.value='';
}


function deleteItem(index){
  list.splice(index,1);
  displaySite();
  localStorage.setItem('allSites',JSON.stringify(list));
}