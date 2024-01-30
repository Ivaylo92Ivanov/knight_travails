import Queue from "./queue";
import BoardNode from "./board_node_class";

export default function knightMoves(coordinates) {

  const startPoint = coordinates[0];
  const endPoint = coordinates[1];

  console.log('StartPoint: ' + `[${startPoint}]`);
  console.log('endPoint: ' + `[${endPoint}]`);

  const treeRoot = new BoardNode(startPoint, [startPoint]);
  // make a queue to simulate level order traversal of possible paths
  const levelOrderQueue = new Queue();
  levelOrderQueue.enqueue(treeRoot);

  while(!levelOrderQueue.isEmpty()) {
    const position = levelOrderQueue.dequeue().value;

    for (const direction of position.possibleDirections) {
      const path = position.path.concat([direction]);
      if (direction.toString()==endPoint.toString()) {
        logPath(path);
        return path;
      } else {
        levelOrderQueue.enqueue(new BoardNode(direction, path));
      };
    };
  };

};

function logPath(path) {
  console.log(`=> You made it in ${path.length} moves!  Here's your path:`);
  path.forEach((step) => console.log(`[${step}]`));
};