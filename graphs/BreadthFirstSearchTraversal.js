

// Breadth first search uses 'Queue' data structure.
// Breadth first search needs to use iterative approach only.
// We are considering only directed graph only.
// As it is directed graph, so no cycles will be there.


const BreadthFirstSearchTraversalImplementation = (graph = null, node = null) => {
  if (!graph || !node) return -1;
  const queue = [ node ];
  const resultantTraversal = [];
  while(queue.length) {
    const firstItem = queue.shift();
    resultantTraversal.push(firstItem);
    for (let neighbour of graph[firstItem]) {
      queue.push(neighbour);
    }
  }
  return resultantTraversal;
};

const main = () => {
  const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
  };
  console.log(BreadthFirstSearchTraversalImplementation(graph, 'a'));
}

main();

