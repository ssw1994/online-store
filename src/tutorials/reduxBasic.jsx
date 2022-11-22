import React from "react";
export function reducer(state, action) {
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

export const DisplayDetails = () => {
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

export const DisplayList = () => {
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

export const AddItem = () => {
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
