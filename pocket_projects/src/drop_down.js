
export const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

let nav = document.querySelector('.drop-down-dog-nav');
let ul = document.querySelector('.drop-down-dog-list');

export function dogLinkCreator() {
  let accum = [];
  for (let name in dogs) {
    let link = document.createElement("a");
    link.href = dogs[name];
    link.innerHTML = name;
    let li = document.createElement("li");
    li.className = "dog-link";
    li.appendChild(link);
    accum.push(li);
  }
  return accum;
}

export function attachDogLinks() {
  let dogLinks  = dogLinkCreator();
  for(let i = 0; i < dogLinks.length; i++){
    ul.appendChild(dogLinks[i]);
  }
}


export function handleEnter(){
  nav.addEventListener('mouseover', (e) => {
    ul.classList.remove('hidden');
  });
}

export function handleLeave(){
  nav.addEventListener('mouseleave', (e) => {
    ul.classList.add('hidden');
  });
}



