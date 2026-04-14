import Modal from "./Modal";
import "./styles.css";

const user = {
  name: "Ahmed",
  role: "Admin",
  email: "ahmed@gmail.com",
};

export default function App() {
  return (
    <div className="app">
      <h1>User</h1>

      <Modal>
        <div className="grid">
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.role}</p>

            <Modal.Open opens="user">
              <button className="btn">View Details</button>
            </Modal.Open>

            <Modal.Window name="user">
              <UserDetails />
            </Modal.Window>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function UserDetails({ onCloseModal }) {
  return (
    <div style={{ minWidth: "250px" }}>
      <h2>{user.name}</h2>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <button className="btn" onClick={onCloseModal}>
        Close
      </button>
    </div>
  );
}
