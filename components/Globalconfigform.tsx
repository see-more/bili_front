"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { DownloadIcon, UploadIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  downloader: z.string().min(2, {
    message: "shold",
  }),
  file_size: z.number().min(2, {
    message: "number should be",
  }),
  segment_time: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  filename_prefix: z.string().min(2, {
    message: "nono",
  }),
  segment_processor_parallel: z.boolean(),
  filtering_threshold: z.number(),
  delay: z.number(),
  event_loop_interval: z.number(),
  pool1_size: z.number(),
  submit_api: z.string(),
  lines: z.string(),
  threads: z.number(),
  pool2_size: z.number(),
  use_live_cover: z.boolean(),
});

const GlobalconfigForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      downloader: "streamlink",
      segment_processor_parallel: false,
      lines: "auto",
      delay: 0,
      pool1_size: 5,
      threads: 3,
      pool2_size: 3,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex items-center gap-2">
          <DownloadIcon
            className="rounded-lg bg-primary/10 p-1 text-primary"
            height={30}
            width={30}
          />
          <h1 className="text-primary">全局下载配置</h1>
        </div>
        <FormField
          control={form.control}
          name="downloader"
          render={({ field }) => (
            <FormItem>
              <FormLabel>下载插件</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue defaultValue={"streamlink"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="streamlink">streamlink</SelectItem>
                  <SelectItem value="ffmpeg">ffmpeg</SelectItem>
                  <SelectItem value="stream-gears">stream-gears</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                选择全局默认的下载插件, 可选: <br />
                1. streamlink（streamlink 用于多线程下载 hls 流，对于 FLV
                流将仅使用 ffmpeg。请手动安装ffmpeg） <br />
                2. ffmpeg（纯ffmpeg下载。请手动安装ffmpeg） <br />
                3. stream-gears（默认）
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file_size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>视频分段大小</FormLabel>
              <div className="relative flex items-center">
                <Input
                  placeholder="0"
                  defaultValue={field.value}
                  onChange={field.onChange}
                />
                <p className="absolute right-4">Byte</p>
              </div>
              <FormDescription>
                录像单文件大小限制，超过此大小分段下载，下载回放时无法使用
                <br />
                单位：Byte，示例：4294967296（4GB）
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="segment_time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>视频分段时长</FormLabel>
              <FormControl>
                <Input placeholder="01:00:00" {...field} />
              </FormControl>
              <FormDescription>
                录像单文件时间限制，超过此时长分段下载。
                <br />
                格式：&apos;00:00:00&apos;（时:分:秒）
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="filename_prefix"
          render={({ field }) => (
            <FormItem>
              <FormLabel>视频分段时长</FormLabel>
              <FormControl>
                <Input placeholder="{streamer}%Y-%m-%dT%H_%M_%S" {...field} />
              </FormControl>
              <FormDescription>
                全局文件名模板。可被单个主播文件名模板覆盖。
                <br />
                可用变量如下
                {"\u007B"}streamer{"\u007D"}: 录播备注 {"\u007B"}title{"\u007D"}
                : 直播标题 %Y-%m-%d %H_%M_%S: 开始录制时的 年-月-日 时_分_秒
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="segment_processor_parallel"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>视频分段后处理并行</FormLabel>
              <FormControl>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-readonly
                  />
                </FormControl>
              </FormControl>
              <FormDescription>
                开启后无法保证分段后处理先后执行顺序
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="filtering_threshold"
          render={({ field }) => (
            <FormItem>
              <FormLabel>碎片过滤</FormLabel>
              <FormControl>
                <div className="relative flex items-center">
                  <Input {...field} />
                  <p className="absolute right-4">MB</p>
                </div>
              </FormControl>
              <FormDescription>
                小于此大小的视频文件将会被过滤删除。
                <br />
                单位：MB
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="delay"
          render={({ field }) => (
            <FormItem>
              <FormLabel>下播延迟检测</FormLabel>
              <FormControl>
                <div className="relative flex items-center">
                  <Input {...field} />
                  <p className="absolute right-4">s</p>
                </div>
              </FormControl>
              <FormDescription>
                当检测到主播下播后，延迟一定时间再次检测确认，避免特殊情况提早启动上传导致分稿件。
                <br />
                单位：秒
                <br /> 默认延迟时间为 0 秒
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="event_loop_interval"
          render={({ field }) => (
            <FormItem>
              <FormLabel>直播事件检测间隔</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                单个主播检测间隔时间，单位：秒。比如虎牙有10个主播，每个主播会间隔10秒检测
                <br />
                单位：秒
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pool1_size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>下载线程池大小</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                负责下载事件的线程池大小，用于限制最大同时录制数。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <div className="flex items-center gap-2">
          <UploadIcon
            className="rounded-lg bg-primary/10 p-1 text-primary"
            height={25}
            width={25}
          />
          <h1 className="text-primary">全局下载配置</h1>
        </div>
        <FormField
          control={form.control}
          name="submit_api"
          render={({ field }) => (
            <FormItem>
              <FormLabel>提交接口</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="web">网页端</SelectItem>
                  <SelectItem value="client">客户端</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                B站投稿提交接口，默认为自动选择。
                <br />
                全局默认上传插件选择。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lines"
          render={({ field }) => (
            <FormItem>
              <FormLabel>上传路线</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue defaultValue={"auto"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="auto">auto</SelectItem>
                  <SelectItem value="bda">bda</SelectItem>
                  <SelectItem value="bda2">bda2</SelectItem>
                  <SelectItem value="ws">ws</SelectItem>
                  <SelectItem value="qn">qn</SelectItem>
                  <SelectItem value="blsa">blsa</SelectItem>
                  <SelectItem value="tx">tx</SelectItem>
                  <SelectItem value="txa">txa</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                b站上传线路选择，默认为自动模式，可手动切换为bda, bda2, ws, qn,
                bldsa, tx, txa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="threads"
          render={({ field }) => (
            <FormItem>
              <FormLabel>上传并发</FormLabel>
              <Input {...field} />
              <FormDescription>
                录像单文件大小限制，超过此大小分段下载，下载回放时无法使用
                <br />
                单位：Byte，示例：4294967296（4GB）
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pool2_size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>上传线程池大小</FormLabel>
              <Input {...field} />
              <FormDescription>
                负责上传事件的线程池大小。根据实际带宽设置。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="use_live_cover"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>使用直播间封面作为投稿封面</FormLabel>
              <FormControl>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-readonly
                  />
                </FormControl>
              </FormControl>
              <FormDescription>
                使用直播间封面作为投稿封面。此封面优先级低于单个主播指定的自定义封面，保存于cover文件夹下，上传后自动删除。
                <br />
                目前支持平台：哔哩哔哩，Twitch，YouTube。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"outline"} type="submit">
          保存
        </Button>
      </form>
    </Form>
  );
};

export default GlobalconfigForm;
