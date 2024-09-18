import GlobalconfigForm from "@/components/Globalconfigform";
import Multiplatform from "@/components/Multiplatform";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

const dashboard = () => {
  return (
    <div>
      <Tabs defaultValue="global_config">
        <TabsList>
          <TabsTrigger value="global_config">全局设置</TabsTrigger>
          <TabsTrigger value="multi_platform_download">各平台下载</TabsTrigger>
          <TabsTrigger value="developer_options">开发者选项</TabsTrigger>
        </TabsList>
        <TabsContent value="global_config">
          <GlobalconfigForm />
        </TabsContent>
        <TabsContent value="multi_platform_download">
          <Multiplatform />
        </TabsContent>
        <TabsContent value="developer_options">开发者选项</TabsContent>
      </Tabs>
    </div>
  );
};

export default dashboard;
