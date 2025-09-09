const smoke = document.querySelector(".smoking");

const words=["kiss", "my", "metal", "ass"];
let counter = 0;

const addWord = () => {
  const smoking = document.createElement("div");
  const text = document.createTextNode(words[counter]);
  smoking.appendChild(text);
  if(counter%2 === 0){
    smoking.classList.add("smoke");
  } else{
    smoking.classList.add("smokeTwo");
  }
  
  smoke.appendChild(smoking);
  if(counter !== 3){
    counter++;
  } else {
    counter =0;
  }
  
}

setInterval(addWord, 3000);
