export const getLists = () => {
  return JSON.parse(localStorage.getItem('lists') || '[]');
}

export const updateTodo = (listId, todoId) => {
  const lists = getLists();
  const checked = lists[listId].todos[todoId].checked;

  lists[listId].todos[todoId].checked = !checked;

  localStorage.setItem('lists', JSON.stringify(lists));
}

export const post = list => {
  const lists = getLists();

  lists.push(list);

  localStorage.setItem('lists', JSON.stringify(lists));
}