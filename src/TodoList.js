import React,{ Component, Fragment} from 'react'
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  // 提交新的代办事项
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  // input 数据修改时同步数据
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 删除某项
  handleItemChange(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list })
  }
  // 获取项目的渲染内容
  getTodoItems(){
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            deleteItem={this.handleItemChange}
            key={index}
            content={item} />
        )
      })
    )
  }

  // 渲染
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className='red-btn' onClick={this.handleBtnClick}>添加</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    )
  }
}

export default TodoList;
