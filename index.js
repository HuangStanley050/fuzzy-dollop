const tf = require("@tensorflow/tfjs-node");

const jumpData = tf.tensor([
  [70, 70, 70],
  [70, 70, 70],
  [70, 70, 70],
  [70, 70, 70],
]);
const playerData = tf.tensor([
  [1, 160],
  [1, 160],
  [1, 160],
  [1, 160],
]);

const finalDataSet = jumpData.sum(1).expandDims(1).concat(playerData, 1);

finalDataSet.print();
