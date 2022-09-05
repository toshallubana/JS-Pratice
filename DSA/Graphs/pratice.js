class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(neighbour => 
            neighbour != v2
        )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(neighbour => 
            neighbour != v1
        )
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            let v = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,v);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstSearchRecursive(start) {
        let result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    return dfs(neighbour);
                }
            }); 
        })(start);
        return result;
    }
    depthFirstSearchIterative(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })
        }
        return result;
    } 
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }
        return result;
    }  
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

// graph.removeEdge("A","B");
// graph.removeVertex("F");
console.log(graph.depthFirstSearchRecursive("A"));
console.log(graph.depthFirstSearchIterative("A"));
console.log(graph.breadthFirst("A"))
console.log(graph);