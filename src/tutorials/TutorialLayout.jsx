import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function TutorialLayout() {
  const [apps, updateApps] = React.useState([
    {
      appName: "Dictionary",
      path: "/tutorials/dictionary",
      active: false,
      id: 1,
    },
    {
      appName: "Blogs",
      path: "/tutorials/blogs",
      active: false,
      id: 2,
    },
    {
      appName: "RestApi",
      path: "/tutorials/rest",
      active: false,
      id: 3,
    },
    {
      appName: "Book Ticket",
      path: "/tutorials/movies",
      active: false,
      id: 4,
    },
  ]);
  const markActive = (app) => {
    updateApps((prev) => {
      return prev.map((a) => {
        if (a.id === app.id) {
          return { ...a, active: true };
        } else {
          return {
            ...a,
            active: false,
          };
        }
      });
    });
  };
  return (
    <div style={{ padding: "15px", margin: "15px" }}>
      <div
        className="heading"
        style={{
          borderBottom: "1px solid black",
          padding: "15px",
          position: "fixed",
          top: "0",
          width: "100%",
          background: "white",
          zIndex: "1",
        }}
      >
        {apps.map((app) => {
          return (
            <Link
              to={app.path}
              key={app.appName}
              onClick={() => markActive(app)}
              style={{
                margin: "0 10px",
                border: "1px solid black",
                borderRadius: "10px",
                padding: "15px",
                background: app.active ? "yellow" : "white",
              }}
            >
              {app.appName}
            </Link>
          );
        })}
      </div>

      <div style={{ position: "relative", top: "50px", overflowY: "hidden" }}>
        <Outlet />
      </div>
    </div>
  );
}
