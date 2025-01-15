import { useEffect } from "react";
import Label from "./Label";
import { useItemStore } from "../stores/itemStore";
import Options from "./Options";
import MainBar from "./MainBar";

function App() {
  const charControl = useItemStore((state) => state.showChar);

  useEffect(() => {
    document.addEventListener("keydown", charControl);
    return () => {
      document.removeEventListener("keydown", charControl);
    };
  });

  return (
    <div className="max-w-[600px] mx-auto mt-12">
      <Label />
      <MainBar />
      <Options />
    </div>
  );
}

export default App;
