
// To find out if there is any path exists b/w start and end node
// We are considering only directed graph only.
// As it is directed graph, so no cycles will be there.


// Complexity
// If 'n' = number of nodes and 'e' = number of edges
// then Time Complexity = O(e), Space Complexity = O(n)


const DepthFirstSearchTraversalHasPathSolution = (graph = null, startNode = null, targetNode = null) => {
  if (!graph || !startNode || !targetNode) return -1;
  const stack = [ startNode ];
  const current = stack.pop();
  if (current === targetNode) return true;
  for (let neighbour of graph[current]) {
    if (DepthFirstSearchTraversalHasPathSolution(graph, neighbour, targetNode)) return true;
  }
  return false;
};


const BreadthFirstSearchTraversalHasPathSolution = (graph = null, startNode = null, targetNode = null) => {
  if (!graph || !startNode || !targetNode) return -1;
  const queue = [ startNode ];
  while (queue.length) {
    const current = queue.shift();
    if (current === targetNode) return true;
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return false;
}

const main = () => {
  const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  console.log(DepthFirstSearchTraversalHasPathSolution(graph, 'f', 'k'));
  console.log(DepthFirstSearchTraversalHasPathSolution(graph, 'j', 'f'));

  console.log(BreadthFirstSearchTraversalHasPathSolution(graph, 'f', 'k'));
  console.log(BreadthFirstSearchTraversalHasPathSolution(graph, 'j', 'f'));
};

main();

