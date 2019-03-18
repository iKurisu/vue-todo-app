export const getLists = () => {
  return JSON.parse(localStorage.getItem('lists') || '[]');
}

export const post = list => {
  const lists = getLists();

  lists.push(list);

  localStorage.setItem('lists', JSON.stringify(lists));
}