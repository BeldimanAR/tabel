// LIBRARIES
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import AppRoutes from "./config/AppRoutes";

const App = () => {
  // CONSTANTS USING LIBRARIES

  // GENERAL CONSTANTS

  // @ts-ignore

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
