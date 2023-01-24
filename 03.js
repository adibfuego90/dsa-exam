// adjacencyList = {
//     A: ["C"],
//     B: ["C"],
//     C: ["A","C"],
//   };
//   console.log(adjacencyList['A']);


class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set(); 
      }
    }
    display() {
        for (let vertex in this.adjacencyList) {
          console.log(vertex + [...this.adjacencyList[vertex]]);
        }
      }
    }
    const gra = new Graph();
    // Adding vertex 
    gra.addVertex("A");
    gra.addVertex("B");
    gra.addVertex("C");
    // Display 
    gra.display();

    