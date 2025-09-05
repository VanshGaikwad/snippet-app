import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippet</h1>
        <Link href={"/snippet/new"}>
          <Button style={{ width: 100, height: 40, fontSize: 20 }}>New</Button>
        </Link>
      </div>
      <div>
        {snippets.map((snippet) => (
          <div key={snippet.id} className="flex items-center justify-between my-4 p-4 border rounded bg-gray-200">
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
              {" "}
              <Button variant={'link'}>View</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
