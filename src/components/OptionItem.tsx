export default function OptionItem({
  item,
  selectedItems,
  setSelectedItems,
  setText,
  setSearchItems,
  defaultItems,
}) {
  const handleAddItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const content = (e.target as HTMLElement).textContent;
    if (typeof content === "string") {
      !selectedItems.includes(content) &&
        setSelectedItems([...selectedItems, content]);
      setText("");
      setSearchItems(defaultItems);
      //inputElement.current?.focus();
    }
  };
  return (
    <li
      onClick={handleAddItem}
      className="p-2 cursor-pointer hover:font-semibold hover:bg-gray-300"
      dangerouslySetInnerHTML={{ __html: item }}
    ></li>
  );
}
