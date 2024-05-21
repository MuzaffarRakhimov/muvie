import "./app_filter.css";

const AppFilter = (props) => {
  const { appKino } = props;
  return (
    <div className="btn-group">
      <button className="btn btn-dark" type="button">
        Barcha kinolar
      </button>
      <button className="btn btn-outline-dark" type="button" onClick={appKino}>
        Mashhur kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Eng ko'p ko'rilgan kinolar
      </button>
    </div>
  );
};

export default AppFilter;
