import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

const RecordCard = () => {
  return (
    <Card className="hover:shadow-md">
      <CardHeader>名称</CardHeader>
      <CardContent>body</CardContent>
      <CardFooter className="justify-between">
        <div>Status</div>
        <div className="flex items-center justify-center gap-2">
          <Button size={"icon"} variant="ghost">
            <TrashIcon height={20} width={20} />
          </Button>
          <Button size={"icon"} variant="ghost">
            <Pencil2Icon height={20} width={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecordCard;
