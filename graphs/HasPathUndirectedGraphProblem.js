
// To find out if there is any path exists b/w start and end node
// We are considering undirected graphs.
// As it is an undirected graph, so cycles will be there.


// Complexity
// If 'n' = number of nodes and 'e' = number of edges
// then Time Complexity = O(e), Space Complexity = O(n)

const DepthFirstSearchTraversalHasPathSolution = (graph = null, startNode = null, targetNode = null, visited = null) => {
  if (!graph || !startNode || !targetNode) return -1;
  if (!visited) visited = new Set();
  const stack = [ startNode ];
  const current = stack.pop();
  if (current === targetNode) return true;
  
  if (visited.has(startNode)) return false;
  visited.add(startNode);

  for (let neighbour of graph[current]) {
    if (DepthFirstSearchTraversalHasPathSolution(graph, neighbour, targetNode, visited)) return true;
  }
  return false;
};

const EdgeToAdjencyList = (edges = []) => {
  const adjencyList = {};
  for (let edge of edges) {
    const [ a, b ] = edge;
    if (!adjencyList[a]) adjencyList[a] = [];
    if (!adjencyList[b]) adjencyList[b] = [];
    adjencyList[a].push(b);
    adjencyList[b].push(a);
  }
  return adjencyList;
}

const main = () => {
  const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  const graph = EdgeToAdjencyList(edges);
  console.log(DepthFirstSearchTraversalHasPathSolution(graph, 'j', 'm'));
}

main();


