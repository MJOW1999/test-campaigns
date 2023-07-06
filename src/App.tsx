import React from "react";
import "./App.css";
import Header from "./components/Header";
import CampaignTable from "./components/CampaignTable";
import { testCampaigns } from "./campaignUtils";

function App() {
  return (
    <div className="App">
      <Header />
      <CampaignTable campaigns={testCampaigns} />
    </div>
  );
}

export default App;
