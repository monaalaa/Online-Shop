import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Authontication from "./routes/authontication/authentication.component";
const Shop = () => {
  return <div>in shop</div>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authontication />} />
      </Route>
    </Routes>
  );
};

export default App;
