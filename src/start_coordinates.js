export default function startCoordinates() {
  const startX = Math.floor(Math.random() * 7) + 0;
  const startY = Math.floor(Math.random() * 7) + 0;
  return [startX, startY];
}