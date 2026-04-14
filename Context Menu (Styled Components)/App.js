import Menus from "./Menus";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import "./styles.css";

const users = [
  { id: 1, name: "Ahmed", role: "Admin" },
  { id: 2, name: "Ali", role: "User" },
  { id: 3, name: "Omar", role: "Editor" },
];

export default function App() {
  return (
    <div className="app">
      <h1>Users</h1>

      <Menus>
        <div className="grid">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <div className="card-header">
                <h3>{user.name}</h3>

                <Menus.Menu>
                  <Menus.Toggle id={user.id} />

                  <Menus.List id={user.id}>
                    <Menus.Button
                      icon={<HiSquare2Stack />}
                      onClick={() => alert("Duplicate " + user.name)}
                    >
                      Duplicate
                    </Menus.Button>

                    <Menus.Button
                      icon={<HiPencil />}
                      onClick={() => alert("Edit " + user.name)}
                    >
                      Edit
                    </Menus.Button>

                    <Menus.Button
                      icon={<HiTrash />}
                      onClick={() => alert("Delete " + user.name)}
                    >
                      Delete
                    </Menus.Button>
                  </Menus.List>
                </Menus.Menu>
              </div>

              <p>{user.role}</p>
            </div>
          ))}
        </div>
      </Menus>
    </div>
  );
}
