
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let element = document.createElement('p');
  element.innerText = string;
  if (htmlElement.children[0]){
    htmlElement.removeChild(htmlElement.children[0]);
  }
  htmlElement.appendChild(element);

};

htmlGenerator('Party Time.', partyHeader);