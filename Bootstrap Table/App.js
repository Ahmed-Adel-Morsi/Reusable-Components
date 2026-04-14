import Table from "./Table";

const data = [
  {
    id: 1,
    name: "Ahmed",
    email: "ahmed@gmail.com",
    role: "Admin",
    status: "Active",
    country: "Egypt",
    salary: "$1000",
  },
  {
    id: 2,
    name: "Ali",
    email: "ali@gmail.com",
    role: "User",
    status: "Inactive",
    country: "UAE",
    salary: "$800",
  },
  {
    id: 3,
    name: "Omar",
    email: "omar@gmail.com",
    role: "Editor",
    status: "Active",
    country: "KSA",
    salary: "$900",
  },
  {
    id: 4,
    name: "Hassan",
    email: "hassan@gmail.com",
    role: "User",
    status: "Pending",
    country: "Qatar",
    salary: "$700",
  },
  {
    id: 5,
    name: "Youssef",
    email: "youssef@gmail.com",
    role: "Admin",
    status: "Active",
    country: "Kuwait",
    salary: "$1200",
  },
];

const columns = ["name", "email", "role", "status", "country", "salary"];

export default function App() {
  return (
    <div className="text-center p-3">
      <h1>Users Table</h1>

      <Table loading={false} error={null} dataLength={data.length}>
        <Table.Header headers={[...columns, "actions"]} />
        <Table.Body>
          {data.map((item, index, arr) => (
            <Table.Row key={item.id} last={index + 1 === arr.length}>
              {columns.map((col) => (
                <Table.Data key={col}>{item[col]}</Table.Data>
              ))}
              <Table.Data last>⋮</Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
