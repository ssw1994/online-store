import axios from "axios";
import React from "react";
import { useState } from "react";

/**
 * @author
 * @function RestApi
 **/

export const RestApi = (props) => {
  const [personForm, updatePersonForm] = useState({
    name: "",
    age: "",
  });

  const addPerson = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3003/person/add", personForm)
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <input
          placeholder="name"
          value={personForm.name}
          onChange={(e) =>
            updatePersonForm((p) => {
              return { ...p, name: e.target.value };
            })
          }
        />
        <input
          value={personForm.age}
          placeholder="age"
          onChange={(e) =>
            updatePersonForm((p) => {
              return { ...p, age: e.target.value };
            })
          }
        />
        <button>Send</button>
      </form>
    </div>
  );
};
