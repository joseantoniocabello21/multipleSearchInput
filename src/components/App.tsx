import { useEffect, useRef, useState } from "react";
import Label from "./Label";
import ItemSelected from "./ItemSelected";
import SearchField from "./SearchField";
import OptionItem from "./OptionItem";

const defaultItems = [
  "Line Chart",
  "Area Chart",
  "Column Chart",
  "Bar Chart",
  "Pie Chart",
  "Scatter Chart",
  "Bubble Chart",
];

function App() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchItems, setSearchItems] = useState(defaultItems);
  const [text, setText] = useState("");

  const inputElement = useRef<HTMLInputElement>(null);

  function showChar(e: KeyboardEvent) {
    if (e.key === "a" && e.ctrlKey === true) {
      const filteredItems = defaultItems.filter(
        (item) => !selectedItems.includes(item)
      );
      setSelectedItems([...selectedItems, ...filteredItems]);
      inputElement.current?.focus();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", showChar);
    return () => {
      document.removeEventListener("keydown", showChar);
    };
  });

  return (
    <>
      <div className="max-w-[600px] mx-auto mt-12">
        <Label />
        <div className=" border border-gray-300 rounded-md flex flex-row flex-wrap items-center px-1 pt-1 mb-2 min-h-9 text-sm h-full">
          {selectedItems.map((item) => {
            return (
              <ItemSelected
                key={`selected-${item}`}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                item={item}
              />
            );
          })}
          <SearchField
            text={text}
            setText={setText}
            setSearchItems={setSearchItems}
            defaultItems={defaultItems}
          />
        </div>

        <section className="chartOptions border border-gray-300 rounded-sm shadow-md">
          <ul className="text-sm">
            {searchItems.map((item) => {
              return (
                <OptionItem
                  key={`option-${item}`}
                  item={item}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  setText={setText}
                  setSearchItems={setSearchItems}
                  defaultItems={defaultItems}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
