import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utlis.js";
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  /* 
  console.log(SHOP_DATA);
  useEffect(() => {
    addCollectionAndDocuments("data", SHOP_DATA);
  }, []);*/
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
