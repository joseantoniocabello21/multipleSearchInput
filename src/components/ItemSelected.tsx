export default function ItemSelected({
  selectedItems,
  setSelectedItems,
  item,
}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const parent = (e.target as HTMLElement).parentElement;
    if (parent) {
      const textContent = parent.textContent;
      if (textContent) {
        const text = textContent.slice(0, -1);
        setSelectedItems(selectedItems.filter((item) => item !== text));
      }
    }
  };
  return (
    <div className="rounded-sm bg-gray-300 px-1 flex shrink-0 items-center justify-center mr-1 mb-1">
      {item}
      <button
        onClick={handleClick}
        className="text-gray-500 text-[12px] p-1 w-5 h-5 flex items-center justify-center ml-1 cursor-pointer"
      >
        X
      </button>
    </div>
  );
}
