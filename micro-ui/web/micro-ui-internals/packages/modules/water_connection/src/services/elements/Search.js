export const WorksSearch = {
  searchEstimate: async (tenantId = "pb.jalandhar", filters = {}) => {
    //dymmy response
    //const response = water_connectionEstimateSearchResponse
    //actual response
    const response = await WorksService?.estimateSearch({ tenantId, filters });
    return response?.estimates;
  },
};
