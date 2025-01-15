import { useRef } from "react";

export default function SearchField({
  text,
  setText,
  defaultItems,
  setSearchItems,
}) {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    let resultArr: string[] = [];
    [...defaultItems].map((item) => {
      //Underline matching text
      if (item.toLowerCase().includes(newText.toLowerCase())) {
        const index = item.toLowerCase().indexOf(newText.toLowerCase());
        const first = item.slice(0, index);
        const middle = item.slice(index, index + newText.length);
        const last = item.slice(index + newText.length);
        const result = `${first}<u>${middle}</u>${last}`;
        resultArr.push(result);
      }
    });
    //
    if (!resultArr.length) resultArr.push(newText);
    //
    setSearchItems(resultArr);
    setText(newText);
  };

  return (
    <input
      id="chartType"
      name="chartType"
      type="text"
      spellCheck={false}
      autoFocus
      ref={inputElement}
      className="h-full outline-none bg-transparent mb-1"
      value={text}
      onChange={handleChange}
    ></input>
  );
}
