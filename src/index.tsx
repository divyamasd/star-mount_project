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
import { PackingDetails } from "./screens/PackingDetails/PackingDetails";
import { AccessoryDetails } from "./screens/AccessoryDetails/AccessoryDetails";
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
      <Route path="/packing-details" element={<PackingDetails />} />
      <Route path="/accessory-details" element={<AccessoryDetails />} />
      <Route path="/production-plan-details" element={<ProductionPlan />} />
      <Route path="/order-authentication" element={<OrderAuthentication />} />
      <Route path="/fabric-lather-management" element={<PackingDetails />} />
      <Route path="/row-fabric-leather" element={<PackingDetails />} />
      <Route path="/receiving-inspection" element={<PackingDetails />} />
      <Route path="/inspection-and-receiving" element={<PackingDetails/>} />
      <Route path="/order-process-control" element={<ProductionPlan />} />
      <Route path="/other-process-control" element={<OrderComponent />} />
      <Route path="/production-issue" element={<OrderAuthentication />} />
      <Route path="/production-received" element={<PackingDetails />} />
      <Route path="/leather-cutting-process" element={<PackingDetails />} />
      <Route path="/challan-detail" element={<PackingDetails />} />
      <Route path="/purchase-order-detail" element={<PackingDetails />} />
      <Route path="/other-production-order" element={<PackingDetails />} />
      <Route path="/challan-cancellation" element={<PackingDetails />} />
      <Route path="/master-details" element={<PackingDetails />} />
      <Route path="/fabric-details" element={<PackingDetails />} />

    </Routes>
  </Router>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
