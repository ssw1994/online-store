import { AddItem, DisplayDetails, DisplayList, reducer } from "./reduxBasic";
const StateContext = React.createContext(null);
const DispatchContext = React.createContext(null);
export default function TutorialApp() {
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
  );
}
