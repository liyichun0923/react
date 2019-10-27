import React, { Component } from 'react';
import TodoItem from './TodeItem';

export default class Todolist extends Component {
    constructor (props) {
        super(props);

        //当state或props改变时，render函数重新执行
        this.state = {
            inputValue: '',
            list: [],
            n : 0
        };

        //输入框输入内容
        this.handleChange = this.handleChange.bind(this);
        //提交，添加进列表
        this.handleSubmit = this.handleSubmit.bind(this);
        //删除当前点击项
        this.handleDelete = this.handleDelete.bind(this);
        //回车事件
        this.keypress = this.keypress.bind(this);
        //计数事件
        this.count = this.count.bind(this);//回车键n+1
        this.count1 = this.count1.bind(this);//删除键n-1

    }

    //添加回车事件
    keypress (e){
        if(e.nativeEvent.keyCode === 13){
            this.handleSubmit();
            this.count();
        }
    }

    //input输入改变
    handleChange () {
        this.setState(() => ({
            inputValue: this.input.value
        }));
    }
    
    //提交添加UI列表
    handleSubmit () {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    //计数
    count () {
        this.setState((state)=>({
            n:state.n+1
        }))
    }
    count1 () {
        this.setState((state)=>({
            n:state.n-1
        }))
    }

    //删除当前点击item
    handleDelete =  (index)=>{
        this.count1();
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list: list
            }
        });
    }

    //添加列表页面
    handleHtml () {
        const list = [...this.state.list];
        return list.map((item, index) => {
            return (
                <TodoItem
                    item={item}
                    key={item}
                    index={index}
                    handleDelete={this.handleDelete}
                />
            )
        })
    }


    render() {
        return (
            <div>
                <div style={{backgroundColor:'#323232',width:'100%',height:55}}>
                    <span style={{
                        color:'#cdcdcd',
                        fontSize:30,
                        paddingLeft:400,
                        paddingRight:180
                        }} 
                    >ToDoList</span>
                    <input 
                    style={{borderRadius:6,height:25,width:350}} 
                    id = 'inputValue'
                    name="n1"
                    placeholder="添加ToDo"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.inputValue}
                    ref={(input) => {this.input = input}}
                    onKeyUp={this.keypress}/>
                </div>    
                <h1 style={{paddingLeft:400,width:600}}>
                    正在进行
                    <span style={{float:'right',fontSize:20,paddingTop:5}}>{this.state.n}</span>
                </h1>
                <div style={{paddingLeft:400}} ref={(div) => {this.div = div}}>
                    {
                        this.handleHtml()
                    }
                </div>
                
            </div>
        )
    }
}
