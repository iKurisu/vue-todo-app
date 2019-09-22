export const ISOToShort = iso => {
  const [year, month, day] = iso.match(/\d+(?=-|T)/g);
  return `${month}/${day}/${year}`;
};
