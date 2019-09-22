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
