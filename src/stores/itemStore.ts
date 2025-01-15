import { create } from "zustand";
import { defaultItems } from "../lib/constants";

type ItemStore = {
  defaultItems: string[];
  selectedItems: string[];
  searchItems: string[];
  text: string;
  showChar: (e: KeyboardEvent) => void;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addItem: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  removeItem: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const useItemStore = create<ItemStore>((set) => ({
  defaultItems: defaultItems,
  selectedItems: [],
  searchItems: defaultItems,
  text: "",
  showChar: (e: KeyboardEvent) => {
    if (e.key === "a" && e.ctrlKey === true) {
      set((state) => {
        const filteredItems = state.defaultItems.filter(
          (item) => !state.selectedItems.includes(item)
        );
        return {
          selectedItems: [...state.selectedItems, ...filteredItems],
        };
      });
    }
  },
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    let resultArr: string[] = [];
    set((state) => {
      [...state.defaultItems].map((item) => {
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
      return { searchItems: resultArr, text: newText };
    });
  },
  addItem: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    //
    const content = (e.target as HTMLElement).textContent;
    set((state) => {
      if (typeof content === "string") {
        if (!state.selectedItems.includes(content)) {
          return {
            selectedItems: [...state.selectedItems, content],
            text: "",
            searchItems: state.defaultItems,
          };
        }
        //
        return {
          selectedItems: [...state.selectedItems],
          text: "",
          searchItems: state.defaultItems,
        };
      }
      return state;
    });
  },
  removeItem: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const parent = (e.target as HTMLElement).parentElement;
    if (parent) {
      const textContent = parent.textContent;
      if (textContent) {
        const text = textContent.slice(0, -1);
        set((state) => {
          return {
            selectedItems: state.selectedItems.filter((item) => item !== text),
          };
        });
      }
    }
  },
}));
