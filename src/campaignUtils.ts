import { Campaign } from "./types";

export const testCampaigns: Campaign[] = [
  {
    // Inactive Campaign
    id: 1,
    name: "Divavu",
    startDate: "9/19/2017",
    endDate: "3/9/2018",
    budget: 88377,
  },
  {
    // Active Campaign
    id: 2,
    name: "Jaxspan",
    startDate: "11/21/2017",
    endDate: "2/21/2028",
    budget: 608715,
  },
  {
    // Campaign ending today (should be active)
    id: 3,
    name: "Miboo",
    startDate: "11/1/2017",
    endDate: "7/6/2023",
    budget: 239507,
  },
  {
    id: 4,
    name: "Trilith",
    startDate: "8/25/2017",
    endDate: "11/30/2017",
    budget: 179838,
  },
  {
    id: 5,
    name: "Layo",
    startDate: "11/28/2017",
    endDate: "3/10/2018",
    budget: 837850,
  },
  {
    id: 6,
    name: "Photojam",
    startDate: "7/25/2017",
    endDate: "6/23/2017",
    budget: 858131,
  },
  {
    id: 7,
    name: "Blogtag",
    startDate: "6/27/2017",
    endDate: "1/15/2018",
    budget: 109078,
  },
  {
    id: 8,
    name: "Rhyzio",
    startDate: "10/13/2017",
    endDate: "1/25/2018",
    budget: 272552,
  },
  {
    id: 9,
    name: "Zoomcast",
    startDate: "9/6/2017",
    endDate: "11/10/2017",
    budget: 301919,
  },
];
