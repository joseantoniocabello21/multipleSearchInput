import { useItemStore } from "../stores/itemStore";
import OptionItem from "./OptionItem";

export default function Options() {
  const searchItems = useItemStore((state) => state.searchItems);
  return (
    <section className="chartOptions border border-gray-300 rounded-sm shadow-md">
      <ul className="text-sm">
        {searchItems.map((item) => {
          return <OptionItem key={`option-${item}`} item={item} />;
        })}
      </ul>
    </section>
  );
}
