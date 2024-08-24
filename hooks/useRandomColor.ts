export const useRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const randomColor = `${r}, ${g}, ${b}`;
  const randomRGBColor = `rgba(${randomColor}, 1)`;
  const randomRGBColorText = `rgba(${randomColor}, 0.8)`;

  return { randomRGBColor, randomRGBColorText };
};
