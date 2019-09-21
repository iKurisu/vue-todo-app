export const getLists = () => {
  return JSON.parse(localStorage.getItem("lists") || "[]");
};

export const updateLists = lists => {
  localStorage.setItem("lists", JSON.stringify(lists));
};

export const updateList = (id, editedList) => {
  const lists = getLists();

  const updatedLists = lists.map(list =>
    list.id === id ? { ...list, ...editedList } : list
  );

  updateLists(updatedLists);
};

export const updateTodo = (listId, todoId) => {
  const lists = getLists();
  const checked = lists[listId].todos[todoId].checked;

  lists[listId].todos[todoId].checked = !checked;

  localStorage.setItem("lists", JSON.stringify(lists));
};

export const post = list => {
  const lists = getLists();

  lists.push(list);

  localStorage.setItem("lists", JSON.stringify(lists));
};
