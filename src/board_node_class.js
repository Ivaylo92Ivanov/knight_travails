export default class BoardNode {
  constructor (position, path) {
    
    this.path = path
    this.position = position;

    this.positionX = position[0];
    this.positionY = position[1];

    this.topLeft = coordinatesValidation([this.positionX-1, this.positionY+2]);
    this.topRight = coordinatesValidation([this.positionX+1, this.positionY+2]);

    this.rightTop = coordinatesValidation([this.positionX+2, this.positionY+1]);
    this.rightBottom = coordinatesValidation([this.positionX+2, this.positionY-1]);

    this.bottomRight = coordinatesValidation([this.positionX+1, this.positionY-2]);
    this.bottomLeft = coordinatesValidation([this.positionX-1, this.positionY-2]);
    
    this.leftBottom = coordinatesValidation([this.positionX-2, this.positionY-1]);
    this.leftTop = coordinatesValidation([this.positionX-2, this.positionY+1]);

    this.possibleDirections = [
      this.topLeft, 
      this.topRight, 
      this.rightTop, 
      this.rightBottom,
      this.bottomRight,
      this.bottomLeft,
      this.leftBottom,
      this.leftTop
    ].filter(n=>n); // filter to remove null values
  };
};

function coordinatesValidation(coordinates) {
  let x = coordinates[0];
  let y = coordinates[1];
  if(x<0 || x>7 || y<0 || y>7) return null;
  return coordinates;
};