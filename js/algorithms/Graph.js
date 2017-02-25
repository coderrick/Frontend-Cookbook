/**
 * Djikstra's Algorithm yada yada...
 */
"use strict";

class Graph{
  constructor(vertice_arr, edge_arr){
    this.vertice_arr = vertice_arr;
    this.edge_arr = edge_arr;
  }
}

Graph.prototype.traverse = {
  djikstra: function(){
    //TODO
    return this.vertice_arr;
  },

  bfs: function(){
    //TODO
     return this.vertice_arr;
  },

  dfs: function(){
    //TODO
     return this.vertice_arr;
  }
}

let g = new Graph([9,2,5],[2,3,1]);
g.traverse.djikstra();
g.traverse.bfs();
g.traverse.dfs();