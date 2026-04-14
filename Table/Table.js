import { createContext, useContext } from "react";

const styledTable = {
  border: "1px solid #e5e7eb",
  fontSize: "1.4rem",
  backgroundColor: "#fff",
  borderRadius: "7px",
  overflow: "hidden",
};

const commonRow = (columns) => ({
  display: "grid",
  gridTemplateColumns: columns,
  columnGap: "2.4rem",
  alignItems: "center",
  transition: "none",
});

const styledHeader = (columns) => ({
  ...commonRow(columns),
  padding: "1.6rem 2.4rem",
  backgroundColor: "#f9fafb",
  borderBottom: "1px solid #f3f4f6",
  textTransform: "uppercase",
  letterSpacing: "0.4px",
  fontWeight: 600,
  color: "#4b5563",
});

const styledRow = (columns) => ({
  ...commonRow(columns),
  padding: "1.2rem 2.4rem",
});

// &:not(:last-child) {
//   border-bottom: 1px solid ...
// }

const styledBody = {
  margin: "0.4rem 0",
};

const footer = {
  backgroundColor: "#f9fafb",
  display: "flex",
  justifyContent: "center",
  padding: "1.2rem",
};

// /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
// &:not(:has(*)) {
//   display: none;
// }

const empty = {
  fontSize: "1.6rem",
  fontWeight: 500,
  textAlign: "center",
  margin: "2.4rem",
};

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div role="table" style={styledTable}>
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div role="row" as="header" style={styledHeader(columns)}>
      {children}
    </div>
  );
}
function Row({ children, isLast }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      style={{
        ...styledRow(columns),
        borderBottom: isLast ? "none" : "1px solid #f3f4f6",
      }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length) return <p style={empty}>No data to show at the moment</p>;

  return <section style={styledBody}>{data.map(render)}</section>;
}

function Footer({ children }) {
  return <footer style={footer}>{children}</footer>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
