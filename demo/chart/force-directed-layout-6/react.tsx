import * as React from 'react';
import { Graph, Node, Edge, } from '../../../packages/viser-graph-react/src/index';

// 弹性缓冲效果未实现
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const colors = [ '#BDD2FD', '#BDEFDB', '#C2C8D5', '#FBE5A2', '#F6C3B7', '#B6E3F5', '#D3C6EA', '#FFD8B8', '#AAD8D8', '#FFD6E7' ];
const strokes = [ '#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC', '#9270CA', '#FF9D4D', '#269A99', '#FF99C3' ];

const data = {
  nodes: [{
    id: '0',
    label: '0',
    value: 10,
    cluster: 'a',
    description: 'this is node 0, \nand the value of it is 10'
  }, {
    id: '1',
    label: '1',
    value: 20,
    cluster: 'b',
    description: 'this is node 1, \nand the value of it is 20'
  }, {
    id: '2',
    label: '2',
    value: 5,
    cluster: 'a',
    description: 'this is node 2, \nand the value of it is 5'
  }, {
    id: '3',
    label: '3',
    value: 10,
    cluster: 'a',
    description: 'this is node 3, \nand the value of it is 10'
  }, {
    id: '4',
    label: '4',
    value: 12,
    cluster: 'c',
    subCluster: 'sb',
    description: 'this is node 4, \nand the value of it is 12'
  }, {
    id: '5',
    label: '5',
    value: 18,
    cluster: 'c',
    subCluster: 'sa',
    description: 'this is node 5, \nand the value of it is 18'
  }, {
    id: '6',
    label: '6',
    value: 3,
    cluster: 'c',
    subCluster: 'sa',
    description: 'this is node 6, \nand the value of it is 3'
  }, {
    id: '7',
    label: '7',
    value: 7,
    cluster: 'b',
    subCluster: 'sa',
    description: 'this is node 7, \nand the value of it is 7'
  }, {
    id: '8',
    label: '8',
    value: 21,
    cluster: 'd',
    subCluster: 'sb',
    description: 'this is node 8, \nand the value of it is 21'
  }, {
    id: '9',
    label: '9',
    value: 9,
    cluster: 'd',
    subCluster: 'sb',
    description: 'this is node 9, \nand the value of it is 9'
  }],
  edges: []
};

const graph = {
  data,
  container: 'mount',
  type: 'graph',
  width: 500,
  height: 500,

  pixelRatio: 1,

  renderer: 'svg',
  fitView: true,
  layout: {
    type: 'force',
    nodeStrength: 30,
    collideStrength: 0.7,
    alphaDecay: 0.01,
    preventOverlap: true
  },
  modes: {
    default: [ 'drag-canvas','drag-node' ]
  },
  defaultNode: {
    size: [ 10, 10 ]
  },
  onDragstart : (e) => {
    refreshDragedNodePosition(e);
  },
  onDrag : (e) => {
    refreshDragedNodePosition(e);
  },
  onDragend: (e) => {
    refreshDragedNodePosition(e);
  },
};

const node = {
  formatter: node => {
    return {
      size: 15,
      style: {
        fill: '#C6E5FF',
        stroke: '#5B8FF9'
      },
    }
  }
}

const edge = {
  formatter: () => {

    return {
      color: '#eee',
    }
  },
}

const refreshDragedNodePosition = (e) => {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Graph {...graph}>
          <Node {...node}/>
          <Edge {...edge}/>
        </Graph>
      </div>
    );
  }
}

