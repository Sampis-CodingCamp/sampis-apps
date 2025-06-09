import React from "react";
import Header from "../../components/AdminComponent/Header";
import Stats from "../../components/AdminComponent/Stats";
import PendingPenukaran from "../../components/AdminComponent/PendingPenukaran";

const Dashboard = () => {
  return (
    <div className="grow p-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"></div>
      <div className="mb-6">
        <Stats />
      </div>
      <div>
        <PendingPenukaran />
      </div>
    </div>
  );
};

export default Dashboard;
