

// Find the shortest path b/w src and target node in an undirected graph.

// Complexity
// If 'n' = number of nodes and 'e' = number of edges
// then Time Complexity = O(e), Space Complexity = O(n)



const EdgesToAdjencyList = (edges = []) => {
  if (!edges.length) return -1;
  const graph = {};
  for (let pair of edges) {
    const [ a, b ] = pair;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const ShortestPathUsingBreadthFirstSearch = (graph = null, source = null, target = null) => {
  if (!graph || !source || !target) return -1;
  const visited = new Set();
  const queue = [ [ source, 0 ] ];
  while(queue.length) {
    const [ val, distance ] = queue.shift();
    if (visited.has(val)) continue;
    visited.add(val);
    if (val === target) return distance;
    for (let neighbour of graph[val]) {
      queue.push([ neighbour, distance + 1 ]);
    }
  }
  return -1;
};


const main = () => {

  const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

  const graph = EdgesToAdjencyList(edges);
  console.log(ShortestPathUsingBreadthFirstSearch(graph, 'w', 'z'));
}

main();

