"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";
import * as actions from "@/actions"

const  CreateSnippetPage=()=> {

  const [formStateData, xyz] = useActionState(actions.createSnippet,{message:""});

  

  return (
    <form action={xyz}>
      <div className="py-4">
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="my-4">
        <Label >Code</Label>
        <Textarea name="code" id="code" />
      </div>
     {formStateData.message &&  <div className="mt-2 p-2 bg-red-300 border-2 border-red-600">{formStateData.message}</div>}
      <Button type="submit" className="my-12">New</Button>
    </form>
  );
};

export default CreateSnippetPage;
