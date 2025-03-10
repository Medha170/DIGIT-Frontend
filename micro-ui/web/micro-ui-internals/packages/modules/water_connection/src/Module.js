import { Loader } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { default as EmployeeApp } from "./pages/employee";
import WaterConnectionCard from "./components/WaterConnectionCard";
import HRMSCard from "./components/HRMSCard";
import ViewEstimateComponent from "./components/ViewEstimateComponent";
import { overrideHooks, updateCustomConfigs } from "./utils";
import AdditionalComponentWrapper from "./components/AdditionalComponent";
import WaterConnectionMultiComponent from "./components/WaterConnectionMultiComponent";

export const WaterConnectionModule = ({ stateCode, userType, tenants }) => {
  const { path, url } = useRouteMatch();
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const moduleCode = ["water_connection", "common", "workflow"];
  const language = Digit.StoreData.getCurrentLanguage();
  const { isLoading, data: store } = Digit.Services.useStore({
    stateCode,
    moduleCode,
    language,
  });

  if (isLoading) {
    return <Loader />;
  }
  return <EmployeeApp path={path} stateCode={stateCode} userType={userType} tenants={tenants} />;
};

const componentsToRegister = {
  WaterConnectionModule,
  WaterConnectionCard,
  HRMSCard,
  ViewEstimatePage: ViewEstimateComponent,
  WaterConnectionAdditionalComponent: AdditionalComponentWrapper,
  WaterConnectionMultiComponent: WaterConnectionMultiComponent,
};

export const initWaterConnectionComponents = () => {
  overrideHooks();
  updateCustomConfigs();
  Object.entries(componentsToRegister).forEach(([key, value]) => {
    Digit.ComponentRegistryService.setComponent(key, value);
  });
};
