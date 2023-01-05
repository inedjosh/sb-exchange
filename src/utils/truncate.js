export const truncate = (text, len) => {
  let display;
  if (text.length > len) {
    display = text.slice(0, len) + "...";
  } else {
    display = text;
  }

  return display;
};
