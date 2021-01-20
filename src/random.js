/* Takes an array of items and returns random item */
function choice(items) {
  const randomIdx = Math.floor(Math.random() * items.length);
  
  return items[randomIdx];
}

export default choice;