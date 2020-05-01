import React from 'react';
import { Table } from 'antd'

function colmn(num){
    this.title="标题"+num;
    this.key=num;
    this.dataIndex="name";
    this.render=function(item){
      return <a href={`http://hello.com/${num}`}>{item}[{num}]</a>
    }
  }
  const arr=[]
  for(let i=0;i<3;i++){
   arr.push(new colmn(i+1))
  }
  const dataSource=[
    {
      name:"A",
      key:1
    }
  ]
  class Ss extends React.Component {
    constructor(){
      super()
    }
    render(){return (
      <div className="App">
        <Table dataSource={dataSource} columns={arr} />
      </div>
    )}
  }
  
  export default Ss;