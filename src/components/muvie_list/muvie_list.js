import "./muvie_list.css";
import MuvieListItem from "../muvie_list_item/muvie_list_item";

const MuvieList = ({ data, onDeleted, onIncrease, onLike }) => {
  return (
    <ul className="muvie-list">
      {data.map((item) => (
        <MuvieListItem
          {...item}
          key={item.id}
          onDelete={() => onDeleted(item.id)}
          onLike={() => onLike(item.id)}
          onIncrease={() => onIncrease(item.id)}
        />
      ))}
    </ul>
  );
};

export default MuvieList;
