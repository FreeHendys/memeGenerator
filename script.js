const divMemeGen = document.querySelector(".meme-gen")
const imageFile = document.querySelector("#imageFile");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const createMemeBtn = document.querySelector("#createMemeBtn");
let count = 1
let img;
let deleteBtn;



createMemeBtn.addEventListener("click", function() {
   const imgUrl = URL.createObjectURL(imageFile.files[0]);

    console.log(imgUrl)
  img = new Image();
  img.src = imgUrl;
  
  img.addEventListener("load", () => {
      createMemeCanvas(img, topTextInput.value, bottomTextInput.value);
    },
    { once: true }
  );
});


function createMemeCanvas(img, topText, bottomText) {;
    const canvas = document.createElement("canvas");
    deleteBtn = document.createElement("button")
    const ctx = canvas.getContext("2d");
    const width = img.width;
    const height = img.height;
    const fontSize = Math.floor(width / 10);
    const yOff = height / 25;
    canvas.setAttribute('class', "meme")
    canvas.setAttribute('id', `${count}`)
    
    deleteBtn.setAttribute('class', 'deleteBtn')
    deleteBtn.setAttribute('id',`${count}`)
    deleteBtn.innerText = `X`
    

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img,0,0);

    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    ctx.textBaseline = "top";
    ctx.strokeText(topText, width / 2, yOff);
    ctx.fillText(topText, width / 2, yOff);

    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText, width / 2, height - yOff);
    ctx.fillText(bottomText, width / 2, height - yOff);

    divMemeGen.appendChild(canvas);
    divMemeGen.appendChild(deleteBtn)
    count++;

    let memeDelete = document.querySelectorAll(".deleteBtn")
      for (i=0; i<memeDelete.length;i++)
    memeDelete[i].addEventListener("click", (e)=> {
      id = e.target.id
      deleteMeme(id)
      e.target.remove()
    });
}

function deleteMeme(id){
  deleteBtn = document.getElementById(`${id}`)
  deleteBtn.remove();
}
