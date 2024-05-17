import './muvie_list.css'
import Muvie_list_item from '../muvie_list_item/muvie_list_item'

const Muvie_list = ({ data ,onDeleted}) => {
  return (
    <ul className='muvie-list'>
      {data.map(item =>
        <Muvie_list_item {...item} key={item.id} onDelete={()=>onDeleted( item.id)}/>
      )}
    </ul>


  )
}

export default Muvie_list