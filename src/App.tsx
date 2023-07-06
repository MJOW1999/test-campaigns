import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CampaignTable from "./components/CampaignTable";
import { Campaign } from "./types";

// Global interface for window.AddCampaigns
declare global {
  interface Window {
    AddCampaigns: (items: Campaign[]) => void;
  }
}

function App() {
  const [currentCampaigns, setCurrentCampaigns] = useState<Campaign[]>([]);

  // Search logic - default of no search text and the filtered results being all of the campaigns
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] =
    useState<Campaign[]>(currentCampaigns);

  async function filterResults(currentCampaigns: Campaign[]) {
    const results = await currentCampaigns.filter((campaign) =>
      campaign.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  }

  // AddCampaigns logic
  window.AddCampaigns = (newCampaigns: Campaign[]) => {
    // append current campaigns with new campaigns
    setCurrentCampaigns((currentCampaigns) => [
      ...currentCampaigns,
      ...newCampaigns,
    ]);
  };

  useEffect(() => {
    filterResults(currentCampaigns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, currentCampaigns]);

  return (
    <div className="App">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <CampaignTable campaigns={searchResults} />
    </div>
  );
}

export default App;
