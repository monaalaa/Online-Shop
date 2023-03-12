import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Authontication from "./routes/authontication/authentication.component";
import Shop from "./routes/shop/shop.component";
import ChecOut from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authontication />} />
        <Route path="checkout" element={<ChecOut />} />
      </Route>
    </Routes>
  );
};

export default App;
