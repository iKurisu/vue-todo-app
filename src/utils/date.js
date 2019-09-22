export const shortToDueDate = short => {
  const dayInMs = 86399000;
  const date = new Date(short);

  return new Date(date.getTime() + dayInMs);
};

export const ISOToShort = iso => {
  const [year, month, day] = iso.match(/\d+(?=-|T)/g);
  return `${month}/${day}/${year}`;
};
