
import './muvie_list_item.css'
import { Component } from 'react'

class Muvie_list_item extends Component {
  constructor(props) {
    super(props)
    this.state = { increase: false, like: false }

  }
  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }))
  }

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like
    }))
  }

  render() {
    const { firtName, soni,onDelete } = this.props
    const { increase, like } = this.state
    return (
      <li className={`list-group-item d-flex justify-content-between ${increase && 'increase'} ${like && 'like'}  `}>
        <span onClick={this.onLike} className='list-group-item-label '>{firtName}</span>
        <input type='number ' className='list-group-item-input' defaultValue={soni} />
        <div className='d-flex justify-content-center align-items-center'>
          <button type='button' className='btn-cookie btn-sn' onClick={this.onIncrease}>
            <i className='fas fa-cookie'></i>
          </button>
          <button type='button' className='btn-trash btn-sn' onClick={onDelete}>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    )
  }

}

export default Muvie_list_item