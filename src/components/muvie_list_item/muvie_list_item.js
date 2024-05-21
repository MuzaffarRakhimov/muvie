import "./muvie_list_item.css";

const MuvieListItem = (props) => {
  const { firtName, soni, onDelete, onLike, onIncrease, like, increase } =
    props;
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        increase && "increase"
      } ${like && "like"}  `}
    >
      <span onClick={onLike} className="list-group-item-label ">
        {firtName}
      </span>
      <input
        type="number "
        className="list-group-item-input"
        defaultValue={soni}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sn"
          onClick={onIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sn" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default MuvieListItem;
