import { useItemStore } from "../stores/itemStore";

export default function SearchField() {
  const text = useItemStore((state) => state.text);
  const inputChange = useItemStore((state) => state.inputChange);

  return (
    <input
      id="chartType"
      name="chartType"
      type="text"
      spellCheck={false}
      autoFocus
      className="h-full outline-none bg-transparent mb-1"
      value={text}
      onChange={inputChange}
    ></input>
  );
}
