export default function getCoordinates() {
  const startX = Math.floor(Math.random() * 8) + 0;
  const startY = Math.floor(Math.random() * 8) + 0;
  const startPoint = [startX, startY];

  let endX = Math.floor(Math.random() * 8) + 0;
  let endY = Math.floor(Math.random() * 8) + 0;
  let endPoint = [endX, endY];

 
  // if startPoint==endPoint , generate new endPoint
  while ( JSON.stringify(startPoint)==JSON.stringify(endPoint) ) {
    endX = Math.floor(Math.random() * 8) + 0;
    endY = Math.floor(Math.random() * 8) + 0;
    endPoint = [endX, endY];
  }

  return [startPoint, endPoint];
}