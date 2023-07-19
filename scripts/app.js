const handleClick = e => {
  const div = document.createElement('div');
  div.style.left = `${e.x}px`;
  div.style.top = `${e.y}px`;
  document.body.append(div);
}


document.body.addEventListener('click', e => handleClick(e))
