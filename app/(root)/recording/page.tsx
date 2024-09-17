import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Recording = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-6">
      <Card className="hover:shadow-md">
        <CardHeader>名称</CardHeader>
        <CardContent>body</CardContent>
        <CardFooter className="justify-between">
          <div>Status</div>
          <div className="flex items-center justify-center gap-2">
            <Button size={"icon"} variant="ghost">
              <Image
                src={"/icons/trash-2.svg"}
                alt={"transh"}
                height={20}
                width={20}
              />
            </Button>
            <Button size={"icon"} variant="ghost">
              <Image
                src={"/icons/square-pen.svg"}
                alt={"transh"}
                height={20}
                width={20}
              />
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="hover:shadow-md">
        <CardHeader>名称</CardHeader>
        <CardContent>body</CardContent>
        <CardFooter className="justify-between">
          <div>Status</div>
          <div className="flex items-center justify-center gap-2">
            <Button size={"icon"} variant="ghost">
              <Image
                src={"/icons/trash-2.svg"}
                alt={"transh"}
                height={20}
                width={20}
              />
            </Button>
            <Button size={"icon"} variant="ghost">
              <Image
                src={"/icons/square-pen.svg"}
                alt={"transh"}
                height={20}
                width={20}
              />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Recording;
