"use client";

import TableOne from "@/components/table";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../convex/_generated/api";
import { UploadDropzone, UploadFileResponse } from "@xixixao/uploadstuff/react";
import "@xixixao/uploadstuff/react/styles.css";

type Props = {};

function Upload({}: Props) {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveStorageId = useMutation(api.files.saveStorageId);
  const saveAfterUpload = async (uploaded: UploadFileResponse[]) => {
    await saveStorageId({ storageId: (uploaded[0].response as any).storageId });
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between pb-20 space-y-3">
        <h1 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white text-3xl md:text-4xl md:leading-tight">
          Upload your Excel File Here
        </h1>
        <UploadDropzone
          uploadUrl={generateUploadUrl}
          fileTypes={{
            "application/pdf": [".pdf"],
            "image/*": [".png", ".gif", ".jpeg", ".jpg"],
          }}
          onUploadComplete={saveAfterUpload}
          onUploadError={(error: unknown) => {
            // Do something with the error.
            alert(`ERROR! ${error}`);
          }}
          // className={() =>
          //   "bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
          // }
        />
        {/* <div className="block bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white">
          <h1>Being Uploaded...</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Upload;
