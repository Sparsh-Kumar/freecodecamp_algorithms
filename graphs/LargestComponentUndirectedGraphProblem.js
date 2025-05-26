


// Find the connected components in an undirected graph.

// Complexity
// If 'n' = number of nodes and 'e' = number of edges
// then Time Complexity = O(e), Space Complexity = O(n)

// In progress

const DepthFirstTraversal = (graph = null, startNode = null, visited = null) => {
  if (!graph || !startNode) return -1;
  if (!visited) visited = new Set();
  if (visited.has(startNode)) return 0;
  visited.add(startNode);
  let componentLength = 1;
  const stack = [ startNode ];
  const current = stack.pop();
  for (let neighbour of graph[current]) {
    componentLength += DepthFirstTraversal(graph, neighbour, visited);
  }
  return componentLength;
}

const LargestComponent = (graph = null) => {
  if (!graph) return -1;
  let largestComponent = -Infinity;
  for (let key in graph) {
    largestComponent = Math.max(largestComponent, DepthFirstTraversal(graph, key));
  }
  return largestComponent;
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

