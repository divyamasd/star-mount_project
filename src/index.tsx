import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OrderEntry } from "./screens/OrderEntry";
import { OrderQuantity } from "./screens/OrderQuantity";
import { OrderFinalFabric } from "./screens/OrderFinalFabric";
import { OrderExchange } from "./screens/OrderExchange/OrderExchange";
import { FabricLatherManagement } from "./screens/FabricLatherManagement/FabricLatherManagement";
import { OrderComponent } from "./screens/OrderComponent";
import { FabricPlanning } from "./screens/FabricPlanning/FabricPlanning";
import { FabricAverage } from "./screens/FabricAverage/FabricAverage";
import { PackingDetails } from "./screens/PackingDetails/PackingDetails";
import { AccessoryDetails } from "./screens/AccessoryDetails/AccessoryDetails";
import { ProductionPlan } from "./screens/ProductionPlan/ProductionPlan";
import { OrderAuthentication } from "./screens/OrderAuthentication/OrderAuthentication";
import { RowFabricLeather } from "./screens/Row Fabric Leather/RowFabricLeather";
import { ReceivingInspection } from "./screens/ReceivingInspection/ReceivingInspection";
import { InspectionAndReceiving } from "./screens/InspectionAndReceiving/InspectionAndReceiving";
import { OrderProcessControl } from "./screens/OrderProcessControl/OrderProcessControl";
import { OtherProcessControl } from "./screens/OtherProcessControl";
import { ProductionIssue } from "./screens/ProductionIssue/ProductionIssue";
import { ProductionReceived } from "./screens/Production Received/ProductionReceived";
import { LeatherCuttingProcess } from "./screens/LeatherCuttingProcess/LeatherCuttingProcess";
import { ChallanCancellation } from "./screens/ChallanCancellation";
import { ChallanDetail } from "./screens/ChallanDetail";
import { PurchaseOrderDetail } from "./screens/PurchaseOrderDetail/PurchaseOrderDetail";
import { OtherProductionOrder } from "./screens/OtherProductionORDER/OtherProductionOrder";
import { MasterDetails } from "./screens/MasterDetails";
import { FabricDetails } from "./screens/FabricDetails";

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
      <Route path="/fabric-lather-management" element={<FabricLatherManagement />} />
      <Route path="/row-fabric-leather" element={<RowFabricLeather />} />
      <Route path="/receiving-inspection" element={<ReceivingInspection />} />
      <Route path="/inspection-and-receiving" element={<InspectionAndReceiving/>} />
      <Route path="/order-process-control" element={<OrderProcessControl />} />
      <Route path="/other-process-control" element={<OtherProcessControl />} />
      <Route path="/production-issue" element={<ProductionIssue />} />
      <Route path="/production-received" element={<ProductionReceived />} />
      <Route path="/leather-cutting-process" element={<LeatherCuttingProcess />} />
      <Route path="/challan-detail" element={<ChallanDetail />} />
      <Route path="/purchase-order-detail" element={<PurchaseOrderDetail />} />
      <Route path="/other-production-order" element={<OtherProductionOrder />} />
      <Route path="/challan-cancellation" element={<ChallanCancellation />} />
      <Route path="/master-details" element={<MasterDetails />} />
      <Route path="/fabric-details" element={<FabricDetails />} />

    </Routes>
  </Router>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
