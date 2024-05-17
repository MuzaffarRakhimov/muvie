import {Component} from 'react'
import './app.css';
import App_info from './app_info/app_info';
import Search_panel from './search_panel/search_panel';
import App_filter from './app_filter/app_filter';
import Muvie_list from './muvie_list/muvie_list';
import MuvieAddForm from './muvie_add_form/muvie_add_form';
import { v4 as uuidv4 } from 'uuid';

class App extends Component{
  constructor(props){
  super(props)
  this.state={
    data:[
      {firtName:'Boyvachcha', soni:123 ,id:1 ,increase:true,},
      {firtName:'Super kelinchak', soni:342,id:2 ,increase:false,},
      {firtName:'Bojalar', soni:567,id:3 ,increase:true,},
    ]
  }
  }

  onDeleted = id =>{
     this.setState(({data})=>{
      return{
        data : data.filter(c=>c.id !== id)
       }
     })
  }

  addForm =(e,item)=>{
    e.preventDefault()
    this.setState(({data})=>{
      return{
        data:[...data,{...item,id:uuidv4()}]
      }
    })
  
  }

  render(){
    const{data}=this.state
    
    return (
      <div className='app font_monospace'>
        <div className='content'>
          <App_info/>
          <div className='search_panel'>
            <Search_panel/>
            <App_filter/>
          </div>
          <Muvie_list data ={data} onDeleted ={this.onDeleted}/>
          <MuvieAddForm addForm={this.addForm}/>
        </div>
      </div>
    )
  }

}

export default App