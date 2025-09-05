import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import * as actions from "@/actions";
import { notFound } from "next/navigation";
const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });
  if (!snippet) notFound();
  
  
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className=" flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            {" "}
            <Button>Edit</Button>{" "}
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant={"destructive"} type="submit">Delete</Button>
          </form>
        </div>
      </div>
      <pre className="pd-3 bg-gray-200 rounded border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
