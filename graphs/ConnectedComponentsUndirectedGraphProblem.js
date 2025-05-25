

// Find the connected components in an undirected graph.

// Complexity
// If 'n' = number of nodes and 'e' = number of edges
// then Time Complexity = O(e), Space Complexity = O(n)

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

  return true;
};

const CountConnectedComponents = (graph = null) => {
  if (!graph) return -1;
  const visited = new Set();
  let components = 0;
  for (let key in graph)
    if (DepthFirstTraversal(graph, key, visited)) components +=1
  return components;
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

  console.log(CountConnectedComponents(graph));
}

main();

