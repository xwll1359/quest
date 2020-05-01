import React from "react";
import { Table,Tag,Dropdown } from 'antd';
class Ll extends React.Component{
    constructor(props){
        super();
        this.state={data1:{
            dataSource:'',
            columns:[{
                title: 'name',
                dataIndex: 'name',
                key: 'name'
              },
              {
                title: 'description',
                dataIndex: 'description',
                key: 'description',
                width: 300,
                ellipsis: true
              },
              {
                title: 'image',
                dataIndex: 'image',
                key: 'image'
              },
              {
                title: 'humanURL',
                dataIndex: 'humanURL',
                key: 'humanURL'
              },
              {
                title: 'baseURL',
                dataIndex: 'baseURL',
                key: 'baseURL'
              },
              {
                title: 'tags',
                dataIndex: 'tags',
                key: 'tags',
                render: tags => (
                  <span>
                    {tags.map(tag => {
                      let color = tag.length > 5 ? 'geekblue' : 'green';
                      return (
                        <Tag color={color} key={tag}>
                          {tag}
                        </Tag>
                      );
                    })}
                  </span>
                ),
              },
              // {
              //   title: 'properties',
              //   dataIndex: 'properties',
              //   key: 'properties',
              //   render: () => (
              //     <span className="table-operation">
              //       <a>Pause</a>
              //       <a>Stop</a>
              //       <Dropdown overlay={menu}>
              //         <a>
              //           More <DownOutlined />
              //         </a>
              //       </Dropdown>
              //     </span>
              //   )
              // }
            ]
        },data2:''}
    }
    componentDidMount(){
        fetch("http://www.mocky.io/v2/5ea28891310000358f1ef182",{
            headers:new Headers({"Content-type":"application/x-www-form-urlencoded"}),
        }).then(function(repsonse){
            return repsonse.json();
        }).then(function(data){
          let mm=data.apis.map((item,index)=>{
              item.image=<img src={item.image}/>
          })
          let nn=data.apis.map((item,index)=>{
          item.baseURL=<a href={item.baseURL}>{item.baseURL}</a>
          })
        //   function colmn(num){
        //     this.title="标题"+num;
        //     this.key=num;
        // }
        // colmn.prototype.render=function(item){
        //     return `<a href='http://hello.com/'+${num}>${item[num]}</a>`
        // }
      //   const arr=[]
      //  for(let i=0;i<3;i++){
      //      arr.push(new colmn(i+1))
      //  }
            this.setState({
                data1:{
                  ...this.state.data1,dataSource:data.apis
                },data2:data.apis
            })  
        }.bind(this))
    }
    change(){
       let inp=this.refs.myinp.value;
       let news=this.state.data2.filter((item,index)=>{
        for(let i of item.tags){
          if(i.indexOf(inp)!=-1){
           return true
          }
        
        } 
      })
         this.setState({data1:{...this.state.data1,dataSource:news}},function(){
           console.log(this.state.data1)
         })
        
    }
    render(){
        return(
            <div>
                 <input type="text" onChange={()=>{this.change()}} ref="myinp"></input>
                 <Table dataSource={this.state.data1.dataSource} columns={this.state.data1.columns} />
            </div>  
        )
    }
}

export default Ll;