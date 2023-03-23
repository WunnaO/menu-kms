import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./css/output.css";
import MenuProvider from "./Context/MenuProvider";
import DishDataProvider from "./Context/DishDataProvider";
import CategoryProvider from "./Context/CategoryProvider";
import LoginCheckProvide from "./Context/LoginCheckProvide";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MenuProvider>
    <DishDataProvider>
      <CategoryProvider>
        <LoginCheckProvide>
          <App />
        </LoginCheckProvide>
      </CategoryProvider>
    </DishDataProvider>
  </MenuProvider>
);
