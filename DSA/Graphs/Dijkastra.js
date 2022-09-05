class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        this.values.push({value,priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // to return end
        let smallest;

        // build initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().value;
            if(smallest === finish) {
                // We are done
                // Build the path to return to end
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] != Infinity) {
                for(let neighbour in this.adjacencyList[smallest]) {
                    // find neighbour node
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    console.log(nextNode)
                    // calculate the distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNode.node]) {
                        // updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate;
                        // updating previous - How we got ot neighbour
                        previous[nextNeighbour] = smallest;
                        // enqueue in priority queue with the new priority
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

const priority = new PriorityQueue();

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B",4);
graph.addEdge("A","C",2);
graph.addEdge("B","E",3);
graph.addEdge("C","D",2);
graph.addEdge("C","F",4);
graph.addEdge("D","E",3);
graph.addEdge("D","F",1);
graph.addEdge("E","F",1);
console.log(graph.Dijkstra("A","F"));