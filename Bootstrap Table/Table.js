function Row({ children, last }) {
  return (
    <tr className={`text-center btn-hov${!last ? " border-bottom" : ""}`}>
      {children}
    </tr>
  );
}

function Header({ headers = [] }) {
  if (!headers?.length) return null;

  return (
    <thead className="text-capitalize">
      <Row>
        {headers.map((header, index, arr) => (
          <Data
            key={header}
            last={index === arr.length - 1}
            styles={{ backgroundColor: "#f4f4f5" }}
          >
            {header}
          </Data>
        ))}
      </Row>
    </thead>
  );
}

function Data({ children, last, classes, styles = {} }) {
  return (
    <td
      style={styles}
      className={`align-middle p-3${!last ? " border-end" : ""}${
        classes ? ` ${classes}` : ""
      }`}
    >
      {children || "-"}
    </td>
  );
}

function Body({ children }) {
  return <tbody>{children}</tbody>;
}

function Table({ children, error, loading, dataLength }) {
  return (
    <div className="border rounded overflow-x-auto mt-3 table-container">
      {loading ? (
        <div className="p-4 text-center fs-small fw-medium">Loading...</div>
      ) : error ? (
        <div className="p-4 text-center fs-small fw-medium">
          Something went wrong:
          <p>{error.message}</p>
        </div>
      ) : dataLength > 0 ? (
        <table className="table table-hover table-borderless fs-small fw-medium m-0 w-100">
          {children}
        </table>
      ) : (
        <div className="p-4 text-center fs-small fw-medium">No Data Found</div>
      )}
    </div>
  );
}

Table.Body = Body;
Table.Header = Header;
Table.Row = Row;
Table.Data = Data;

export default Table;
