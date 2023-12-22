"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const Documents = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a New Note",
      success: "New Note Created",
      error: "Failed to Create a New Note",
    });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src={"/empty.png"}
        height={"300"}
        width={"300"}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src={"/empty-dark.png"}
        height={"300"}
        width={"300"}
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusIcon className="mr-2 size-4" />
        Create a Note
      </Button>
    </div>
  );
};

export default Documents;
