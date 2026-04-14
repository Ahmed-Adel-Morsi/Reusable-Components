import "./styles.css";
import Table from "./Table";

const data = [
  {
    id: 1,
    cabin: "001",
    guest: "Ahmed",
    dates: "1 Apr - 5 Apr",
    status: "Checked-in",
    amount: "$250",
  },
  {
    id: 2,
    cabin: "002",
    guest: "Ali",
    dates: "3 Apr - 6 Apr",
    status: "Pending",
    amount: "$180",
  },
  {
    id: 3,
    cabin: "003",
    guest: "Omar",
    dates: "10 Apr - 12 Apr",
    status: "Checked-out",
    amount: "$300",
  },
];

export default function App() {
  return (
    <div className="App">
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={data}
          render={(item, index) => (
            <Row key={item.id} item={item} isLast={index === data.length - 1} />
          )}
        />

        <Table.Footer>
          <span>Total: {data.length} bookings</span>
        </Table.Footer>
      </Table>
    </div>
  );
}

function Row({ item, isLast }) {
  return (
    <Table.Row isLast={isLast}>
      <div>{item.cabin}</div>
      <div>{item.guest}</div>
      <div>{item.dates}</div>
      <div>{item.status}</div>
      <div>{item.amount}</div>
      <div>⋮</div>
    </Table.Row>
  );
}
