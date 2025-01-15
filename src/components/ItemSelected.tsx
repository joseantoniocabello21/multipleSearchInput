import { useItemStore } from "../stores/itemStore";

type ItemSelectedProps = {
  item: string;
};

export default function ItemSelected({ item }: ItemSelectedProps) {
  const removeItem = useItemStore((state) => state.removeItem);
  return (
    <div className="rounded-sm bg-gray-300 px-1 flex shrink-0 items-center justify-center mr-1 mb-1">
      {item}
      <button
        onClick={removeItem}
        className="text-gray-500 text-[12px] p-1 w-5 h-5 flex items-center justify-center ml-1 cursor-pointer"
      >
        X
      </button>
    </div>
  );
}
