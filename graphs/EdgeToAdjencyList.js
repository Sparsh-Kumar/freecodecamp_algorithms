
const EdgeToAdjencyList = (edges = []) => {
  const adjencyList = {};
  for (let pair of edges) {
    const [ a, b ] = pair;
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
  const adjencyList = EdgeToAdjencyList(edges);
  console.log(adjencyList);
}

main();

