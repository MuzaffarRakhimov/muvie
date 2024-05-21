import "./app_info.css";

const AppInfo = ({ appLengthItem, appSevimliFilm }) => {
  return (
    <div className="app_info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni : {appLengthItem}
      </p>
      <p className="fs-4 text-uppercase">Sevimli kinolar : {appSevimliFilm} </p>
    </div>
  );
};

export default AppInfo;
