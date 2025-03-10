import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const WaterConnectionCard = () => {
  const { t } = useTranslation();

  const propsForModuleCard = {
    Icon: "BeenHere",
    moduleName: t("WaterConnection"),
    kpis: [],
    links: [
      // {
      //   label: t("Individual Create"),
      //   link: `/${window?.contextPath}/employee/water_connection/create-individual`,
      // },

      // {
      //   label: t("Individual Search"),
      //   link: `/${window?.contextPath}/employee/water_connection/water_connection-search`,

      // },
      // {
      //   label: t("WaterConnection View"),
      //   link: `/${window?.contextPath}/employee/water_connection/water_connection-view??tenantId=pg.citya&estimateNumber=ES/2023-24/002390&projectNumber=PJ/2023-24/02/002830`,

      // },
      // {
      //   label: t("Individual View Details"),
      //   link: `/${window?.contextPath}/employee/water_connection/individual-details-view`,
      // },
      //      {
      //   label: t("WaterConnection Components"),
      //   link: `/${window?.contextPath}/employee/water_connection/water_connection-components`,
      // },
      {
        label: t("WaterConnection Create"),
        link: `/${window?.contextPath}/employee/water_connection/water_connection-create`,
      },
      {
        label: t("WaterConnection Search"),
        link: `/${window?.contextPath}/employee/water_connection/search-individual`,
      },

      {
        label: t("Individual Tab Search"),
        link: `/${window?.contextPath}/employee/water_connection/tab-search-individual`,
      },
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default WaterConnectionCard;
