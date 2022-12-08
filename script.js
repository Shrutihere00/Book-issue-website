//Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
//Display Constructor
function Display() {}

//Add metods to display prototype
Display.prototype.add = function (b) {
  tableBody = document.querySelector("#tableBody");
  let uiString = ` <tr>
                        <td>${b.name}</td>
                        <td>${b.author}</td>
                        <td>${b.type}</td>
                    </tr>`;
  tableBody.innerHTML += uiString;
};
Display.prototype.clear = function () {
  libraryForm.reset();
};
Display.prototype.validate=function(b){
if (b.name.length<2 || b.author.length<2){
    return false
}else{
    return true
}
}

Display.prototype.show=function(type){
    let message=document.getElementById("message")
    if(type=='success'){
        message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>SUCCESS!</strong> Book is successfully added
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
        
        `
    }
    else if(type=='danger'){
        message.innerHTML=  `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>ERROR!</strong> Invalid Values
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
        
        `

    }
setTimeout(() => {
    message.innerHTML=''
}, 2000 );

}
//Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let computerprogramming = document.getElementById("computerprogramming");
  let elonmusk = document.getElementById("elonmusk");
  let driving = document.getElementById("driving");
  let cooking = document.getElementById("cooking");
  let type;
  if (computerprogramming.checked) {
    type = computerprogramming.value;
  } else if (elonmusk.checked) {
    type = elonmusk.value;
  } else if (driving.checked) {
    type = driving.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  let display = new Display();
  if(display.validate(book)){
    display.add(book);
    var elements=[]
    localStorage.setItem('Book',JSON.stringify(book))
  display.clear();
  display.show('success')
  }
  else{
   display.show('danger')
  }
  
  e.preventDefault();
}
