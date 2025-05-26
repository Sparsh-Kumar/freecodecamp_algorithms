


// Find the connected components in an undirected graph.

// Complexity
// If 'n' = number of nodes and 'e' = number of edges
// then Time Complexity = O(e), Space Complexity = O(n)

// In progress

const DepthFirstTraversal = (graph = null, startNode = null, visited = null) => {
  if (!graph || !startNode) return -1;
  if (!visited) visited = new Set();
  const stack = [ startNode ];
  const current = stack.pop();
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (let neighbour of graph[current]) {
    DepthFirstTraversal(graph, neighbour, visited);
  }
  return visited.size;
}

const LargestComponent = (graph = null) => {
  if (!graph) return -1;
  let largest = -Infinity;
  for (let key in graph)
    console.log(DepthFirstTraversal(graph, key))
  return largest;
};

const main = () => {
  const graph = {
    '0': ['8', '1', '5'],
    '1': ['0'],
    '5': ['0', '8'],
    '8': ['0', '5'],
    '2': ['3', '4'],
    '3': ['2', '4'],
    '4': ['3', '2']
  };

  console.log(LargestComponent(graph));
}

main();

