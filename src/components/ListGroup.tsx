import { useState } from "react";
import { Journal } from "../services/journal-service";

interface Props {
  items: Journal[];
  heading: string;
  onSelectItem: (item: string) => void;
  onDeleteItem: (item: Journal) => void;
  onAddItem: () => void;
  onUpdateItem: (item: Journal) => void;
}

function ListGroup({
  items,
  heading,
  onSelectItem,
  onDeleteItem,
  onAddItem,
  onUpdateItem,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <button className="btn btn-primary mb-3" onClick={() => onAddItem()}>
        Add
      </button>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active d-flex justify-content-between"
                : "list-group-item d-flex justify-content-between"
            }
            key={item.id}
          >
            <a
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item.subject);
              }}
            >
              {" "}
              {item.subject}
            </a>
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => onUpdateItem(item)}
              >
                Update
              </button>
              <button
                onClick={() => {
                  setSelectedIndex(-1);
                  onDeleteItem(item);
                }}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
