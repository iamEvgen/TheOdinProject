const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const newP = document.createElement('p');
newP.textContent = 'Hey I’m red!';
newP.style.color = 'red';
container.appendChild(newP);

const newH3 = document.createElement('h3');
newH3.textContent = 'I’m a blue h3!';
newH3.style.color = 'blue';
container.appendChild(newH3);

const masterDiv = document.createElement('div');
masterDiv.style.background = 'pink';
masterDiv.style.border = 'black solid 3px';

const newH1 = document.createElement('h1');
newH1.textContent = 'I’m in a div';

const newP2 = document.createElement('p');
newP2.textContent = 'ME TOO!';

masterDiv.appendChild(newH1);
masterDiv.appendChild(newP2);
container.appendChild(masterDiv);

btn.addEventListener('keypress', function (e) {
    e.target.style.background = 'blue';
  });