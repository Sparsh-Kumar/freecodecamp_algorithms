

// Depth first search uses 'Stack' data structure.
// We are considering only directed graph only.
// As it is directed graph, so no cycles will be there.


const DepthFirstSearchTraversalImplementationOne = (graph = null, startNode = null, resultantTraversal = []) => {
  if (!graph || !startNode) return -1;
  const stack = [ startNode ];
  const currentValue = stack.pop();
  resultantTraversal.push(currentValue)
  for (let neighbour of graph[startNode]) {
    DepthFirstSearchTraversalImplementationOne(graph, neighbour, resultantTraversal);
  }
  return resultantTraversal;
};

const DepthFirstSearchTraversalImplementationTwo = (graph = null, startNode = null) => {
  if (!graph || !startNode) return -1;
  const resultantTraversal = [];
  const stack = [startNode]
  while(stack.length) {
    const currentValue = stack.pop();
    resultantTraversal.push(currentValue);
    for (let neighbour of graph[currentValue]) {
      stack.push(neighbour);
    }
  }
  return resultantTraversal;
}

const main = () => {
  const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
  };
  console.log(DepthFirstSearchTraversalImplementationOne(graph, 'a'));
  console.log(DepthFirstSearchTraversalImplementationTwo(graph, 'a'));
}

main();
