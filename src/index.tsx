import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OrderEntry } from "./screens/OrderEntry";
import { OrderQuantity } from "./screens/OrderQuantity";
import { OrderFinalFabric } from "./screens/OrderFinalFabric";
import { OrderExchange } from "./screens/OrderExchange/OrderExchange";
import { OrderComponent } from "./screens/OrderComponent";
import { FabricPlanning } from "./screens/FabricPlanning/FabricPlanning";
import { FabricAverage } from "./screens/FabricAverage/FabricAverage";
import { PackingDetails } from "./screens/PackingDetails";
import { ProductionPlan } from "./screens/ProductionPlan/ProductionPlan";
import { OrderAuthentication } from "./screens/OrderAuthentication/OrderAuthentication";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<OrderEntry />} />
      <Route path="/order-entry" element={<OrderEntry />} />
      <Route path="/order-quantity" element={<OrderQuantity />} />
      <Route path="/order-final-fabric-detail" element={<OrderFinalFabric />} />
      <Route path="/order-exchange" element={<OrderExchange />} />
      <Route path="/order-component" element={<OrderComponent />} />
      <Route path="/fabric-planning" element={<FabricPlanning />} />
      <Route path="/fabric-average" element={<FabricAverage />} />
      <Route path="/accessory-details" element={<PackingDetails />} />
      <Route path="/packing-details" element={<PackingDetails />} />
      <Route path="/production-plan-details" element={<ProductionPlan />} />
      <Route path="/order-authentication" element={<OrderAuthentication />} />
      <Route path="/fabric-lather-management" element={<OrderAuthentication />} />
      <Route path="/row-fabric-leather" element={<OrderAuthentication />} />
      <Route path="/receiving-inspection" element={<OrderAuthentication />} />
      <Route path="/inspection-and-receiving" element={<OrderAuthentication />} />
      <Route path="/order-process-control" element={<OrderAuthentication />} />
      <Route path="/other-process-control" element={<OrderAuthentication />} />
      <Route path="/production-issue" element={<OrderAuthentication />} />
      <Route path="/production-received" element={<OrderAuthentication />} />
      <Route path="/leather-cutting-process" element={<OrderAuthentication />} />
      <Route path="/challan-detail" element={<OrderAuthentication />} />
      <Route path="/purchase-order-detail" element={<OrderAuthentication />} />
      <Route path="/other-production-order" element={<OrderAuthentication />} />
      <Route path="/challan-cancellation" element={<OrderAuthentication />} />
      <Route path="/master-details" element={<OrderAuthentication />} />
      <Route path="/fabric-details" element={<OrderAuthentication />} />

    </Routes>
  </Router>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
