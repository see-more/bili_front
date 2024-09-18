"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import Link from "next/link";
//shoud enum type but now string feature will refactor to enum
const formSchema = z.object({
  bili_qn: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bilibili_danmaku: z.boolean(),
  bili_cookie: z.string(),
  bili_cookie_file: z.string(),
  bili_protocol: z.string(),
  bili_perfCDN: z.string(),
  bili_cdn_fallback: z.boolean(),
});

const BiliForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="bili_qn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>画质等级</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue defaultValue={"10000"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="300000">300000</SelectItem>
                  <SelectItem value="20000">20000</SelectItem>
                  <SelectItem value="10000">10000</SelectItem>
                  <SelectItem value="401">401</SelectItem>
                  <SelectItem value="400">400</SelectItem>
                  <SelectItem value="250">250</SelectItem>
                  <SelectItem value="150">150</SelectItem>
                  <SelectItem value="80">80</SelectItem>
                  <SelectItem value="0">0</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                哔哩哔哩自选画质。默认原画。
                <br />
                刚开播如果无选择的画质，会先录制原画，
                后续视频分段时，如果下载插件为非
                stream-gears，会切换到选择的画质。
                <br />
                如果选择的画质不提供，会选择更低一档的画质。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bilibili_danmaku"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>录制弹幕</FormLabel>
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
                录制哔哩哔哩弹幕，目前不支持视频按时长分段下的弹幕文件自动分段。仅限下载插件为非
                stream-gears 时生效，默认关闭。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bili_cookie"
          render={({ field }) => (
            <FormItem>
              <FormLabel>下播延迟检测</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                根据格式填入cookie。推荐使用「
                <Link href={"https://github.com/biliup/biliup-rs"}>
                  biliup-rs
                </Link>
                」来获取。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bili_cookie_file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>哔哩哔哩 Cookie 文件</FormLabel>
              <Select {...field}>
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
                只支持「biliup-rs」生成的文件。当与上一个配置项同时存在时，将优先使用文件。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bili_cookie_file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>直播流协议</FormLabel>
              <Select {...field}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="stream">stream</SelectItem>
                  <SelectItem value="hls_ts">hls_ts</SelectItem>
                  <SelectItem value="hls_fmp4">hls_fmp4</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                哔哩哔哩直播流协议。
                <br />
                由于B站转码为 fmp4
                需要一定时间，或者某些小主播（大部分只有原画选项的主播）无fmp4流时，
                如果开播时间小于60s，将会反复尝试获取 fmp4
                流，如果没获取到就回退到 flv 流。
                <br />
                由于 ffmpeg 不支持多并发，且 stream-gears 尚未支持
                fmp4，推荐切换为 streamlink 来录制 hls 流。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bili_perfCDN"
          render={({ field }) => (
            <FormItem>
              <FormLabel>优选CDN</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>哔哩哔哩直播优选CDN，默认无。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bili_cdn_fallback"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>CDN 回退</FormLabel>
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
                CDN 回退（Fallback），默认为关闭。例如海外机器优选 ov05
                之后，如果 ov05 流一直无法下载，将会自动回退到 ov07
                进行下载。仅限相同流协议。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"ghost"} type="submit">
          保存
        </Button>
      </form>
    </Form>
  );
};

export default BiliForm;
