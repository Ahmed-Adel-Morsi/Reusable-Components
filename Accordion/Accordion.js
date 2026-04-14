import { useState } from "react";

export default function Accordion({ data }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          num={i}
          title={item.title}
          key={item.title}
          openId={openId}
          onOpen={setOpenId}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        num={3}
        title={"React Best Practice"}
        key={"React Best Practice"}
        openId={openId}
        onOpen={setOpenId}
      >
        <p>Allow React Developer to:</p>
        <ul>
          <li>Break up ui into components</li>
          <li>Make Conponents reuseable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, openId, onOpen, children }) {
  const opened = openId === num;

  function handleOpen() {
    onOpen(opened ? null : num);
  }

  return (
    <div className={`item ${opened ? "open" : ""}`} onClick={handleOpen}>
      <p className="number">{`${num < 10 ? "0" : ""}${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{opened ? "-" : "+"}</p>
      {opened && <div className="content-box">{children}</div>}
    </div>
  );
}
