import { useItemStore } from "../stores/itemStore";
import ItemSelected from "./ItemSelected";
import SearchField from "./SearchField";

export default function MainBar() {
  const selectedItems = useItemStore((state) => state.selectedItems);
  return (
    <div className=" border border-gray-300 rounded-md flex flex-row flex-wrap items-center px-1 pt-1 mb-2 min-h-9 text-sm h-full">
      {selectedItems.map((item) => {
        return <ItemSelected key={`selected-${item}`} item={item} />;
      })}
      <SearchField />
    </div>
  );
}
