import { useContext } from "react";
import { MasterDataContext } from "../context/MasterDataContext";

const useMasterData = () => {
  const context = useContext(MasterDataContext);
  if (!context) throw Error("Master Data Context not found");
  return context;
};

export default useMasterData;