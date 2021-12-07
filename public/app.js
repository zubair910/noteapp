var listBox = document.getElementById("listBox");

function add_Todo() {
  var input = document.getElementById("input");

 console.log(input.value.length)

    if(input.value.length>3){
      console.log("correct ")
        var li = document.createElement("li");
        var liTxt = document.createTextNode(input.value);
     
        li.appendChild(liTxt);
        console.log(li);
      
        
        var delBtn = document.createElement("button");
        var delBtnTxt = document.createTextNode("DELETE");
        delBtn.appendChild(delBtnTxt);
        delBtn.setAttribute("onclick", "delList(this)");
        console.log(delBtn);
      
       
        var editBtn = document.createElement("button");
        var editBtnTxt = document.createTextNode("EDIT");
        editBtn.appendChild(editBtnTxt);
        editBtn.setAttribute("onclick", "editList(this)");
        console.log(editBtn);
      
        li.appendChild(editBtn);
        li.appendChild(delBtn);
      
        listBox.appendChild(li);
        input.value = "";
    } else{
      alert("enter input correct value")
  }



}


function del_All() {
  listBox.innerHTML = "";
}

function delList(e) {
 
  e.parentNode.remove();
}

function editList(e) {
 
  var editValue = prompt("ENTER EDIT VALUE", e.parentNode.firstChild.nodeValue  );
  console.log(editValue);
  e.parentNode.firstChild.nodeValue = editValue;
}





function addTodo() {
  var input2 = document.getElementById("input2");

 console.log(input2.value.length)

    if(input2.value.length > 3){
        console.log("correct ")
        var li = document.createElement("li");
        var liTxt = document.createTextNode(input2.value);
     
        li.appendChild(liTxt);
        console.log(li);
      
        
        var delBtn = document.createElement("button");
        var delBtnTxt = document.createTextNode("DELETE");
        delBtn.appendChild(delBtnTxt);
        delBtn.setAttribute("onclick", "delList(this)");
        console.log(delBtn);
      
       
        var editBtn = document.createElement("button");
        var editBtnTxt = document.createTextNode("EDIT");
        editBtn.appendChild(editBtnTxt);
        editBtn.setAttribute("onclick", "editList(this)");
        console.log(editBtn);
      
        li.appendChild(editBtn);
        li.appendChild(delBtn);
      
        listBox.appendChild(li);
        input2.value = "";
    }else{
        alert("enter input correct value")
    }
}

function delAll() {
  listBox.innerHTML = "";
}

function delList(e) {
 
  e.parentNode.remove();
}

function editList(e) {
 
  var editValue = prompt("ENTER EDIT VALUE", e.parentNode.firstChild.nodeValue  );
  console.log(editValue);
  e.parentNode.firstChild.nodeValue = editValue;
}