import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OrderEntry } from "./screens/OrderEntry";
import { OrderQuantity } from "./screens/OrderQuantity";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<OrderEntry />} />
      <Route path="/order-entry" element={<OrderEntry />} />
      <Route path="/order-quantity" element={<OrderQuantity />} />
      <Route path="/order-final-fabric-detail" element={<OrderEntry />} />
      <Route path="/order-exchange" element={<OrderEntry />} />
      <Route path="/order-component" element={<OrderEntry />} />
      <Route path="/fabric-planning" element={<OrderEntry />} />
      <Route path="/fabric-average" element={<OrderEntry />} />
      <Route path="/accessory-details" element={<OrderEntry />} />
      <Route path="/packing-details" element={<OrderEntry />} />
      <Route path="/production-plan-details" element={<OrderEntry />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
