

// ************ GLOBAL VARIABLE**************
var nameInput=document.getElementById("name");
var urlInput=document.getElementById("website");
var websiteContainer;


var btnadd=document.getElementById("add");
var btnupdate=document.getElementById("update");

var currentindex;

// ******************************************



// ********* try but failed ***********
// var elementadd=document.getElementById("add");
// elementadd=addEventListener('click',addWebsite)
// *********************************************




// ********************beginning of entry***************
if (localStorage.getItem("website")==null){
    websiteContainer=[]
}else{
    websiteContainer=JSON.parse(localStorage.getItem("website"))
}
// *****************************************************



// ***************** ADD SITE NAME , SITE URL ****************
function addWebsite()
{
    var website={
name:nameInput.value,
url:urlInput.value,
    }
    websiteContainer.push(website)
    display(websiteContainer)
    clearform()
    localStorage.setItem("website",JSON.stringify(websiteContainer))
}
// ***********************************************************


// ********************** CLEAR FORM ************************
function clearform(){
    nameInput.value=null;
    urlInput.value=null;
}
// **********************************************************


// ************************* DISPLAY ****************************
function display(list){
    cartona=``;
    for (var i = 0 ; i<websiteContainer.length ; i++)
        {
            cartona+=`
            <tr>
        <th class="bg1" scope="row">${[i+1]}</th>
        <td class="bg1">${list[i].name}</td>
        <td class="bg1">
            <button class="btn btn-warning"><a target="_blank" href="${list[i].url}"><span><i class="fa-regular fa-eye"></i></span> Visit</a>
            </button>
        </td>
        <td class="bg1"><button onclick="deleteWebsite(${i})" class="btn btn-danger"><span><i class="fa-regular fa-trash-can"></i></span> Delete</button>
        </td>



        <td class="bg1"><button onclick="getupdate(${i})" class="btn btn-primary"><span><i class="fa-solid fa-file-pen"></i></span> UPDATE</button>
        </td>`



        }
    document.getElementById("tdata").innerHTML=cartona;
}
// ***************************************************************


// ***************************** DELETE ******************************
function deleteWebsite(index)
{
websiteContainer.splice(index,1)
localStorage.setItem("website",JSON.stringify(websiteContainer))
display(websiteContainer)
}
// *******************************************************************






function getupdate(index){
    currentindex=index;
    nameInput.value= websiteContainer[index].name;
    urlInput.value=websiteContainer[index].url;
    btnadd.classList.add("d-none")
    btnupdate.classList.remove("d-none")
}


function update(){
    websiteContainer[currentindex].name=nameInput.value;
    websiteContainer[currentindex].url=urlInput.value;
    display(websiteContainer);
    localStorage.setItem("website",JSON.stringify(websiteContainer));

    btnadd.classList.remove("d-none");
    btnupdate.classList.add("d-none");
    clearform()

}






function search(searchvalue){
    var cartona=``;
    for (var i = 0 ; i<websiteContainer.length ; i++){
        if (websiteContainer[i].name.includes(searchvalue)){
            cartona+=`
            <tr>
        <th class="bg1" scope="row">${[i+1]}</th>
        <td class="bg1"> ${websiteContainer[i].name}</td>
        <td class="bg1">
            <button class="btn btn-warning"><a target="_blank" href="${websiteContainer[i].url}"><span><i class="fa-regular fa-eye"></i></span> Visit</a>
            </button>
        </td>
        <td class="bg1"><button onclick="deleteWebsite(${i})" class="btn btn-danger"><span><i class="fa-regular fa-trash-can"></i></span> Delete</button>
        </td>



        <td class="bg1"><button onclick="getupdate(${i})" class="btn btn-primary"><span><i class="fa-solid fa-file-pen"></i></span> UPDATE</button>
        </td>`
        }
    }
    document.getElementById("tdata").innerHTML=cartona;

}