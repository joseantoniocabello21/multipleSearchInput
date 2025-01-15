import { useItemStore } from "../stores/itemStore";

type OptionItemProps = {
  item: string;
};

export default function OptionItem({ item }: OptionItemProps) {
  const addItem = useItemStore((state) => state.addItem);
  return (
    <li
      onClick={addItem}
      className="p-2 cursor-pointer hover:font-semibold hover:bg-gray-300"
      dangerouslySetInnerHTML={{ __html: item }}
    ></li>
  );
}
