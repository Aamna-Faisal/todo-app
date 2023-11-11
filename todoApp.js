var getul= document.getElementById('ul')
function add(){
      var a= document.getElementById ('inp')
      var li= document.createElement('li')
      var litext= document.createTextNode(a.value)
      li.appendChild(litext)
      getul.appendChild(li)
      a.value=''
      var deletebtn = document.createElement('button')
      var deletebtnText= document.createTextNode('Delete')
      deletebtn.appendChild(deletebtnText)
      li.appendChild(deletebtn)
      deletebtn.setAttribute('onclick', 'del(this)')
}
function del(e){
      e.parentNode.remove()
}

function deleteall(){
      getul.innerHTML=""
}

