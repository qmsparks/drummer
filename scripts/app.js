const handleClick = e => {
  const div = document.createElement('div');
  document.body.append(div);
  div.style.left = `${e.x - (div.scrollWidth/2)}px`;
  div.style.top = `${e.y - (div.scrollHeight/2)}px`;
}


document.body.addEventListener('click', e => handleClick(e))
