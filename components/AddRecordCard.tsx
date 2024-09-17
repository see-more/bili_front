import React from "react";
import { Card } from "@/components/ui/card";
import { PlusIcon } from "@radix-ui/react-icons";
const AddRecordCard = () => {
  return (
    <Card className="flex flex-1 h-full w-full items-center justify-center hover:bg-card/10">
      <PlusIcon width={50} height={50}/>
    </Card>
  );
};

export default AddRecordCard;
