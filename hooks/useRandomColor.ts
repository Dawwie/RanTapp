export const useRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const randomRGBColor = `rgb(${r}, ${g}, ${b})`;

  return randomRGBColor;
};
