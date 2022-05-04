 console.log('Welcome to notes app.');
 showNotes();

  //Note will be added to localStorage
  let addButton = document.getElementById('addButton');
  addButton.addEventListener("click", function(e){

    let addText = document.getElementById("addText");
    
    let notes =localStorage.getItem("notes");
    if(notes == null){
      notesObj = [];
    }else{
      notesObj = JSON.parse(notes);
     }
    
    localStorage.clear();
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    showNotes();
  })

  let micButton = document.getElementById("micButton");
  micButton.addEventListener("click", function(e){

const textarea = document.getElementById("addText");
  const texts= document.querySelector('.texts');

  window.SpeechRecognitionAlternative =
    window.SpeechRecognitionAlternative || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognitionAlternative();
  recognition.interimResults = true;
  //it will give real time result when we are talking

  let p = document.createElement("p");
  recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    
    textarea.innerText = text;
    textarea.value=textarea.value+appendChild(p);
    


    if (e.results[0].isFinal) {
      p = document.createElement("p");
    }

    recognition.addEventListener("end", () => {
      recognition.start();
    });
    console.log(text);
  });

  recognition.start();


  })
  
  function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes== null){
      notesObj=[];
    }else{
      notesObj = JSON.parse(notes);
    }
     let html="";
     notesObj.forEach(function(element, index){
     html += `
      <div id="notes" class="row container-fluid">
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index+1} </h5>
            <p class="card-text">${element}</p>
            <button  id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
        </div>



     `;


     });

     let notesElm =document.getElementById('notes');
     if(notesObj.length!=0){
       notesElm.innerHTML=html;
     }else{
       notesElm.innerHTML = `No note.`;
     }

  }

  function deleteNote(index){
  console.log('I am deleting', index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }


  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
  }

 let search = document.getElementById("searchText");
 search.addEventListener("input", function(){

  let inputVal= search.value.toLowerCase();
  console.log('Input', inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element){
    let cardText = element.getElementsByTagName("p")[0].innerText;
    if(cardText.includes(inputVal)){
      element.style.display = "block";
    }else{
      element.style.display = "none";  
    }
  })
})
