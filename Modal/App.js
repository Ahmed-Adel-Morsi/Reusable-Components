import Modal from "./Modal";

export default function App() {
  return (
    <div className="App">
      <Modal>
        <Modal.Open opens="gg">
          <button>open modal</button>
        </Modal.Open>
        <Modal.Window name="gg">
          <WindowContent />
        </Modal.Window>
      </Modal>
    </div>
  );
}

function WindowContent({ onCloseModal }) {
  return (
    <div>
      <button onClick={onCloseModal}>Close</button>
    </div>
  );
}
