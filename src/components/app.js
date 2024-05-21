import { Component } from "react";
import "./app.css";
import AppInfo from "./app_info/app_info";
import SearchPanel from "./search_panel/search_panel";
import AppFilter from "./app_filter/app_filter";
import MuvieList from "./muvie_list/muvie_list";
import MuvieAddForm from "./muvie_add_form/muvie_add_form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          firtName: "Boyvachcha",
          soni: 123,
          id: 1,
          increase: false,
          like: false,
        },
        {
          firtName: "Super kelinchak",
          soni: 342,
          id: 2,
          increase: false,
          like: false,
        },
        { firtName: "Bojalar", soni: 567, id: 3, increase: false, like: false },
      ],
    };
  }

  appKino = () => {
    console.log("kino");
    this.setState(({ data }) => {
      const newarr = data.map((item) => {
        item.fainIn();
        // if (item.like) {
        //   return item;
        // }
        // return item;
      });

      return {
        data: newarr,
      };
    });
  };

  onLike = (id) => {
    this.setState(({ data }) => {
      const newErr = data.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      });

      return {
        data: newErr,
      };
    });
  };

  onIncrease = (id) => {
    this.setState(({ data }) => {
      const newErr = data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      });

      return {
        data: newErr,
      };
    });
  };

  onDeleted = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((c) => c.id !== id),
      };
    });
  };

  addForm = (e, item) => {
    e.preventDefault();

    this.setState(({ data }) => {
      return {
        data: [...data, { ...item, id: uuidv4() }],
      };
    });
  };

  render() {
    const { data } = this.state;
    const appLengthItem = data.length;
    const appSevimliFilm = data.filter((e) => e.increase).length;

    return (
      <div className="app font_monospace">
        <div className="content">
          <AppInfo
            appLengthItem={appLengthItem}
            appSevimliFilm={appSevimliFilm}
          />
          <div className="search_panel">
            <SearchPanel />
            <AppFilter appKino={this.appKino} />
          </div>
          <MuvieList
            data={data}
            onDeleted={this.onDeleted}
            onLike={this.onLike}
            onIncrease={this.onIncrease}
          />
          <MuvieAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
