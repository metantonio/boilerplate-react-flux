import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-center mt-5">
        <h1>Hello {store.users.username}</h1>
        

        <ul className="list-group list-group-flush">
          {store.users.map((users, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                <tr>
                  <td>{users.username}</td>
                  <td>{users.updatedAt}</td>
                </tr>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
