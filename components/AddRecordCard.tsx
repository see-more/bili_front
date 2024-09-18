"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import { DialogDescription } from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const formSchema = z.object({
  remark: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
const AddRecordCard = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      remark: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="flex h-full w-full flex-1 flex-col items-center justify-center hover:bg-card/10">
          <CardHeader></CardHeader>
          <CardContent>
            <PlusIcon width={50} height={50} />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-[400px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-primary/90">
            录播管理
            <Separator className="mt-4 text-primary" />
          </DialogTitle>
          <VisuallyHidden.VisuallyHidden>
            <DialogDescription>
              Dont remove this hidden description
            </DialogDescription>
          </VisuallyHidden.VisuallyHidden>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="remark"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-start text-primary/90">
                      录播备注
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                onClick={() => {
                  if(!form.formState.isValid)
                    return
                  setOpen((open) => !open);
                }}
                variant={"ghost"}
                type="submit"
                className="bg-primary/10 text-primary"
              >
                保存
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddRecordCard;
