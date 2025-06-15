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
import { BarcodeMaster } from "./screens/BarcodeMaster";
import { ActivityControl } from "./screens/ActivityControl";
import { ActivityMaster } from "./screens/ActivityMasterNew/ActivityMaster";
import { BinMaster } from "./screens/BinMaster";
import { Brand } from "./screens/Brand";
import { BuyerDetails } from "./screens/BuyerDetails";
import { BuyerGroup } from "./screens/BuyerGroup";
import { CityMaster } from "./screens/CityMaster";
import { Colour } from "./screens/Colour";
import { Company } from "./screens/Company";
import { Component } from "./screens/Component";
import { Country } from "./screens/Country";
import { CountryGroup } from "./screens/CountryGroup";
import { Currency } from "./screens/Currency";
import { Department } from "./screens/Department";
import { FinancialYear } from "./screens/FinancialYear";
import { GeneralChallanType } from "./screens/GeneralChallanType";
import { GradeMaster } from "./screens/GradeMaster";
import { Group } from "./screens/Group";
import { GroupMaster } from "./screens/GroupMaster";
import { GSTtemplateMaster } from "./screens/GSTtemplateMaster";
import { HeadCostingTemplate } from "./screens/HeadCostingTemplate";
import { IndentMaster } from "./screens/IndentMaster";
import { MakeMaster } from "./screens/MakeMaster";
import { MeasureUnit } from "./screens/MeasureUnit";
import { ModeOfDispatch } from "./screens/ModeOfDispatch";
import { OpeningStock } from "./screens/OpeningStock";
import { OtherExpenseMaster } from "./screens/OtherExpenseMaster";
import { Person } from "./screens/Person";
import { ProcessActivity } from "./screens/ProcessActivity";
import { RegionMaster } from "./screens/RegionMaster";
import { SaleAgent } from "./screens/SaleAgent";
import { SaleRepresentative } from "./screens/SaleRepresentative";
import { Sampling } from "./screens/Sampling";
import { SeasonYear } from "./screens/SeasonYear";
import { ShippingAddress } from "./screens/ShippingAddress";
import { StateMaster } from "./screens/StateMaster";
import { StoreMaster } from "./screens/StoreMaster";
import { StyleGroupMaster } from "./screens/StyleGroupMaster";
import { SubComponent } from "./screens/SubComponent";
import { SubProcess } from "./screens/SubProcess";
import { TailorGroupMaster } from "./screens/TailorGroupMaster";
import { TaxTemplateMaster } from "./screens/TaxTemplateMaster";
import { TaxType } from "./screens/TaxType";
import { TimeAndAction } from "./screens/TimeAndAction";
import { TimeSlot } from "./screens/TimeSlot";
import { UserWiseEmailInfo } from "./screens/UserWiseEmailInfo";
import { VehicleMaster } from "./screens/VehicleMaster";
import { Vendor } from "./screens/Vendor";

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
      <Route path="/barcode-master" element={<BarcodeMaster />} />
      <Route path="/activity-control" element={<ActivityControl />} />
      <Route path="/activity-master" element={<ActivityMaster />} />
      <Route path="/bin-master" element={<BinMaster />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/buyer-details" element={<BuyerDetails />} />
      <Route path="/buyer-group" element={<BuyerGroup/>} />
      <Route path="/city-master" element={<CityMaster/>} />
      <Route path="/colour" element={<Colour/>} />
      <Route path="/company" element={<Company/>} />
      <Route path="/component" element={<Component/>} />
      <Route path="/country" element={<Country/>} />
      <Route path="/country-group" element={<CountryGroup/>} />
      <Route path="/currency" element={<Currency/>} />
      <Route path="/department" element={<Department/>} />
      <Route path="/financial-year" element={<FinancialYear/>} />
      <Route path="/general-challan-type" element={<GeneralChallanType/>} />
      <Route path="/grade-master" element={<GradeMaster/>} />
      <Route path="/group" element={<Group/>} />
      <Route path="/gst-template-master" element={<GSTtemplateMaster/>} />
      <Route path="/head-costing-template" element={<HeadCostingTemplate/>} />
      <Route path="/indentMaster" element={<IndentMaster/>} />
      <Route path="/makeMaster" element={<MakeMaster/>} />
      <Route path="/measure-unit" element={<MeasureUnit/>} />
      <Route path="/mode-of-dispatch" element={<ModeOfDispatch/>} />
      <Route path="/opening-stock" element={<OpeningStock/>} />
      <Route path="/other-expense-master" element={<OtherExpenseMaster/>} />
      <Route path="/person" element={<Person/>} />
      <Route path="/process-activity" element={<ProcessActivity/>} />
      <Route path="/region-master" element={<RegionMaster/>} />
      <Route path="/sale-agent" element={<SaleAgent/>} />
      <Route path="/sale-representative" element={<SaleRepresentative/>} />
      <Route path="/sampling" element={<Sampling/>} />
      <Route path="/season-year" element={<SeasonYear/>} />
      <Route path="/shipping-address" element={<ShippingAddress/>} />
      <Route path="/state-master" element={<StateMaster/>} />
      <Route path="/store-master" element={<StoreMaster/>} />
      <Route path="/style-group-master" element={<StyleGroupMaster/>} />
      <Route path="/sub-component" element={<SubComponent/>} />
      <Route path="/sub-process" element={<SubProcess/>} />
      <Route path="/tailor-group-master" element={<TailorGroupMaster/>} />
      <Route path="/tax-template-master" element={<TaxTemplateMaster/>} />
      <Route path="/tax-type" element={<TaxType/>} />
      <Route path="/time-and-action" element={<TimeAndAction/>} />
      <Route path="/time-slot" element={<TimeSlot/>} />
      <Route path="/user-wise-email-info" element={<UserWiseEmailInfo/>} />
      <Route path="/vehicle-master" element={<VehicleMaster/>} />
      <Route path="/vendor" element={<Vendor/>} />



    </Routes>
  </Router>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
