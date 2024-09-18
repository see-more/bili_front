import AddRecordCard from "@/components/AddRecordCard";
import RecordCard from "@/components/RecordCard";
import React from "react";

const uploading = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-6">
      <RecordCard />
      <AddRecordCard />
    </div>
  );
};

export default uploading;
