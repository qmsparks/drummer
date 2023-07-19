const images = [];
for (let i=0; i <=43; i++) {
  images.push(`images/drummer${i}.jpeg`)
}

const handleClick = e => {
  // const div = document.createElement('div');
  // document.body.append(div);
  // div.style.left = `${e.x - (div.scrollWidth/2)}px`;
  // div.style.top = `${e.y - (div.scrollHeight/2)}px`;

  const img = document.createElement('img');
  const randomNumber = Math.floor(Math.random()*images.length);
  const randomImg = images.splice(randomNumber, 1);

  
  img.src = randomImg;
  img.style.left = `${e.x - (img.width/2)}px`;
  img.style.top = `${e.y - (img.height/2)}px`;
  document.body.append(img)
}


document.body.addEventListener('click', e => handleClick(e))
