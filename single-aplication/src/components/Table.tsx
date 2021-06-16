import React from "react";
import "../styles/list.css";
import useService from "../modules/fetch";

const Table: React.FC<{}> = () => {
  const service = useService();
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      {service.status === "loading" && <div>Loading...</div>}
      {service.status === "loaded" &&
        service.payload.data.map((Starship) => (
          <tbody>
            <tr key={Starship.id}>
              <td>{Starship.id}</td>
              <td>
                {Starship.first_name} {Starship.last_name}
              </td>
              <td>{Starship.email}</td>
            </tr>
          </tbody>
        ))}
      {service.status === "error" && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </table>
  );
};

export default Table;
