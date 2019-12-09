import * as React from 'react';
import { Graph, Node, Edge, } from '../../../packages/viser-graph-react/src/index';

// 弹性缓冲效果未实现

const data = {
  nodes: [{
    id: '0',
    label: '0'
  },
  {
    id: '1',
    label: '1'
  },
  {
    id: '2',
    label: '2'
  },
  {
    id: '3',
    label: '3'
  },
  {
    id: '4',
    label: '4'
  },
  {
    id: '5',
    label: '5'
  },
  {
    id: '6',
    label: '6'
  },
  {
    id: '7',
    label: '7'
  },
  {
    id: '8',
    label: '8'
  },
  {
    id: '9',
    label: '9'
  }],
  edges: [{
    source: '0',
    target: '1'
  },
  {
    source: '0',
    target: '2'
  },
  {
    source: '0',
    target: '3'
  },
  {
    source: '0',
    target: '4'
  },
  {
    source: '0',
    target: '5'
  },
  {
    source: '0',
    target: '7'
  },
  {
    source: '0',
    target: '8'
  },
  {
    source: '0',
    target: '9'
  },
  {
    source: '2',
    target: '3'
  },
  {
    source: '4',
    target: '5'
  },
  {
    source: '4',
    target: '6'
  },
  {
    source: '5',
    target: '6'
  }]
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
    preventOverlap: true,
    nodeSize: 20
  },
  defaultNode: {
    size: 15,
    color: '#5B8FF9',
    style: {
      lineWidth: 1,
      fill: '#C6E5FF'
    }
  },
  defaultEdge: {
    size: 1,
    color: '#e2e2e2'
  },

  modes: {
    default: ['drag-canvas','drag-node'] // 展示区域暂时有问题 增加canvas拖拽
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
