import { Component } from 'react'
import './muvie_add_form.css'

class MuvieAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firtName: '',
      soni: '',
    }
  }

  viursOnChanch = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  render() {
    const{firtName,soni} = this.state
    const {addForm} =this.props
    return (
      <div className='muvie-add-form'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex' onSubmit={e=>addForm(e,{firtName,soni})}>
          <input type='text' className=' form-control new-post-label' placeholder='Qanday kino?' onChange={this.viursOnChanch} name='firtName' value={firtName} />
          <input type='number' className=' form-control new-post-label' placeholder='Necha marotaba korilgan?' onChange={this.viursOnChanch} name='soni' value={soni} />
          <button type='submit' className='btn btn-outline-dark'>
            Qo'shish
          </button>
        </form>
      </div>
    )
  }

}

export default MuvieAddForm