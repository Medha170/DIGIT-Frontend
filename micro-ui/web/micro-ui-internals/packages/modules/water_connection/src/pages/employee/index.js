import { AppContainer, BreadCrumb, PrivateRoute } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Switch } from "react-router-dom";
import Inbox from "./WaterConnectionInbox";
import SearchWageSeeker from "./WaterConnectionSearch";
import AdvancedCreate from "./WaterConnectionAdvancedSearch";
import Response from "./Response";
import IndividualCreate from "./IndividualCreate";
import IndividualSearch from "./IndividualSearch";
import ViewIndividual from "../../configs/ViewIndividual";
import Create from "./WaterConnectionCreate";
import View from "./WaterConnectionView";
import WaterConnectionComponents from "./WaterConnectionComponents";
import PanelCardResponse from "./PanelCardResponse";
import TabIndividualSearch from "./TabIndividualSearch";
import IndividualViewDetails from "./IndividualViewDetails";
import EmployeeViewDetails from "./EmployeeViewDetails";

const ProjectBreadCrumb = ({ location }) => {
  const { t } = useTranslation();
  const crumbs = [
    {
      path: `/${window?.contextPath}/employee`,
      content: t("HOME"),
      show: true,
    },
    {
      path: `/${window?.contextPath}/employee`,
      content: t(location.pathname.split("/").pop()),
      show: true,
    },
  ];
  return <BreadCrumb crumbs={crumbs} spanStyle={{ maxWidth: "min-content" }} />;
};

const App = ({ path, stateCode, userType, tenants }) => {
  return (
    <Switch>
      <AppContainer className="ground-container">
        <React.Fragment>
          <ProjectBreadCrumb location={location} />
        </React.Fragment>
        <PrivateRoute path={`${path}/water_connection-create`} component={() => <Create></Create>} />
        <PrivateRoute path={`${path}/advanced`} component={() => <AdvancedCreate></AdvancedCreate>} />
        <PrivateRoute path={`${path}/inbox`} component={() => <Inbox></Inbox>} />
        <PrivateRoute path={`${path}/water_connection-search`} component={() => <SearchWageSeeker></SearchWageSeeker>} />
        <PrivateRoute path={`${path}/response`} component={() => <Response></Response>} />
        <PrivateRoute path={`${path}/create-individual`} component={() => <IndividualCreate />} />
        <PrivateRoute path={`${path}/search-individual`} component={() => <IndividualSearch></IndividualSearch>} />
        <PrivateRoute path={`${path}/individual-details`} component={() => <ViewIndividual />} />
        <PrivateRoute path={`${path}/water_connection-view`} component={() => <View />} />
        <PrivateRoute path={`${path}/water_connection-components`} component={() => <WaterConnectionComponents />} />
        <PrivateRoute path={`${path}/water_connection-success`} component={() => <PanelCardResponse />} />
        <PrivateRoute path={`${path}/tab-search-individual`} component={() => <TabIndividualSearch />} />
        {/* <PrivateRoute path={`${path}/individual-details-view`} component={() => <IndividualViewDetails />} /> */}
        <PrivateRoute path={`${path}/individual-details-view`} component={() => <EmployeeViewDetails />} />
      </AppContainer>
    </Switch>
  );
};

export default App;
