import EditSnippetForm from '@/components/ui/EditSnippetForm'
import { prisma } from '@/lib/prisma';
import { Editor } from '@monaco-editor/react'
import React from 'react'

const EditPageSnippet = async ({params}:{params:Promise<{id:string}>}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where:{id}
  });
  if(!snippet){
    return <div>Snippet not found</div>
  }

  return <EditSnippetForm snippet={snippet}/>
}

export default EditPageSnippet