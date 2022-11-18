import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeRouter } from "./home/HomeRouter/HomeRouter";
import { AppLayout } from "./AppLayout";
import { AuthLayout } from "./auth/AuthLayout/AuthLayout";
import { Login } from "./auth/Login/Login";
import { Register } from "./auth/Register/Register";
import { VarientContext } from "./shared/contexts";
import config from "./config";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

const StateContext = React.createContext(null);
const DispatchContext = React.createContext(null);

function reducer(state, action) {
  //type compulary , payload
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "SELECT_ITEM": {
      return {
        ...state,
        selectedItem: action.payload,
      };
    }
    case "DELETE_ITEM": {
      const arr = state.list.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        list: arr,
        selectedItem: arr.find((item) => item.id === state.selectedItem.id)
          ? state.selectedItem
          : null,
      };
    }
    default:
      return { ...state };
  }
}

const DisplayDetails = () => {
  const { selectedItem } = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const deleteItem = () => {
    dispatch({ type: "DELETE_ITEM", payload: selectedItem });
  };

  if (!selectedItem) {
    return <h1>No item selected</h1>;
  }
  return (
    <div>
      <div>
        <span>{selectedItem.name}</span>
      </div>
      <div>
        <span>{selectedItem.number}</span>
      </div>
      <div>
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
};

const DisplayList = () => {
  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const selectItem = (item) => {
    dispatch({ type: "SELECT_ITEM", payload: item });
  };

  const deleteItem = (event, item) => {
    event && event.stopPropagation();
    dispatch({ type: "DELETE_ITEM", payload: item });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {state.list.map((item) => {
            return (
              <tr key={item.name} onClick={() => selectItem(item)}>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>
                  <button onClick={(e) => deleteItem(e, item)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

class Diary {
  name;
  number;
  id;
  constructor(name = "", number = "") {
    this.name = name;
    this.number = number;
    this.id = Date.now();
  }
}

const AddItem = () => {
  //const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const [dairyItem, updateDiary] = React.useState(new Diary());

  const Add = () => {
    dispatch({ type: "ADD", payload: dairyItem });
    updateDiary(new Diary());
  };
  return (
    <div>
      <div>
        <input
          placeholder="Name"
          onChange={(e) => updateDiary({ ...dairyItem, name: e.target.value })}
          value={dairyItem.name}
        />
      </div>
      <div>
        <input
          placeholder="Number"
          onChange={(e) =>
            updateDiary({ ...dairyItem, number: e.target.value })
          }
          value={dairyItem.number}
        />
      </div>
      <div>
        <button onClick={Add}>Add</button>
      </div>
    </div>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    list: [],
    selectedItem: null,
  });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div style={{ padding: "15px", display: "flex" }}>
          <div
            style={{
              width: "33%",
              border: "1px solid black",
              margin: "0 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddItem />
          </div>
          <div
            style={{
              width: "33%",
              border: "1px solid black",
              margin: "0 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DisplayList />
          </div>
          <div
            style={{
              width: "33%",
              border: "1px solid black",
              margin: "0 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DisplayDetails />
          </div>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>

    // <VarientContext.Provider value={config.variant}>
    //   <div className="App">
    //     <Router>
    //       <Routes>
    //         <Route path="/" element={<AppLayout />}>
    //           <Route path="/" element={<HomeRouter />}></Route>
    //         </Route>
    //         <Route path="/auth" element={<AuthLayout />}>
    //           <Route path="login" element={<Login />}></Route>
    //           <Route path="register" element={<Register />}></Route>
    //         </Route>
    //       </Routes>
    //     </Router>
    //   </div>
    // </VarientContext.Provider>
  );
}

export default App;
