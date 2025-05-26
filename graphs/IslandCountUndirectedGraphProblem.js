

// Island count in a 2-D grid
// If r = number of rows in the grid.
// If c = number of cols in the grid.
// Then Time Complexity = O(rc), Space Complexity = O(rc)

// We will be using Depth First Search Traversal for this problem.


const DepthFirstTraversal = (graph = null, src = null, visited = null) => {
  if (!graph || !src) return -1;
  if (!visited) visited = new Set();
  if (visited.has(src)) return false;
  visited.add(src);
  const stack = [ src ];
  const current = stack.pop();
  for (let neighbour of graph[current]) {
    DepthFirstTraversal(graph, neighbour, visited);
  }
  return true;
}

const IslandCount = (graph = null) => {
  if (!graph) return -1;
  const visited = new Set();
  let islandsCount = 0;
  for (let key in graph) {
    if (DepthFirstTraversal(graph, key, visited)) {
      islandsCount += 1;
    }
  }
  return islandsCount;
}

const CreateAdjencyList = (grid = []) => {
  const rows = grid?.length || 0;
  const cols = grid[0]?.length || 0;
  const graph = {};
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      
      const elem = grid[row][col];
      const isLand = (elem === 'L');
      if (!isLand) continue;

      const address = `${row},${col}`;
      if (!graph[address]) graph[address] = [];

      const prevExist = (col > 0);
      const nextExist = (col < cols - 1);
      const upExist = (row > 0);
      const downExist = (row < rows - 1);

      let prev = null;
      let next = null;
      let up = null;
      let down = null;

      if (prevExist)
        prev = grid[row][col - 1];
      if (nextExist)
        next = grid[row][col + 1];
      if (upExist)
        up = grid[row - 1][col];
      if (downExist)
        down = grid[row + 1][col];

      if (prevExist && prev === 'L')
        graph[address].push(`${row},${col - 1}`);
      if (nextExist && next === 'L')
        graph[address].push(`${row},${col + 1}`);
      if (upExist && up === 'L')
        graph[address].push(`${row - 1},${col}`);
      if (downExist && down === 'L')
        graph[address].push(`${row + 1},${col}`);
    }
  }
  return graph;
}

const main = () => {
  const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
  ]

  const graph = CreateAdjencyList(grid);
  console.log(IslandCount(graph));

}

main();

