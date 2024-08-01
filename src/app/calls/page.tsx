"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../convex/_generated/api";
import {
  useUploadFiles,
} from "@xixixao/uploadstuff/react";
import "@xixixao/uploadstuff/react/styles.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Papa from "papaparse";
import { CheckCircle, FileSpreadsheet, XCircle } from "lucide-react";

type Props = {};

function Calls({}: Props) {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const [storageId, setStorageId] = useState<string>("");
  const [completed, setCompleted] = useState(false);
  const [responseData, setResponseData] = useState<any>(null);
  const createNewBatch = useMutation(api.batches.createNewBatch);
  const { startUpload } = useUploadFiles(generateUploadUrl);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const label = formData.get("label") as string;

    // Ensure a file is uploaded
    if (!storageId) {
      alert("Please upload a file first.");
      return;
    }

    // Fetch the uploaded file content
    const response = await fetch(
      `/api/get-file-content?storageId=${storageId}`
    );
    const csvText = await response.text();

    let jsonData: any;
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        jsonData = results.data;
      },
    });

    const numCalls = jsonData.length;
    const cost = numCalls * 0.1;

    // Prepare the API request body
    const requestBody = {
      label,
      base_prompt: "Convert cold leads",
      test_mode: true,
      pathway_id: "df2d3a8f-3caa-4cfa-82e6-422b470dd23d",
      call_data: jsonData, // Pass the parsed JSON data
    };

    // Make the API request
    const options = {
      method: "POST",
      headers: {
        authorization:
          "sk-fn65o22uz5e861a8o63of8whsrbzju8rhbqb10xxsgb9p37clvxtxd70lpm7tt8069",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    try {
      const apiResponse = await fetch(
        "https://api.bland.ai/v1/batches",
        options
      );
      const apiData = await apiResponse.json();
      setResponseData(apiData);
      setCompleted(true);

      await createNewBatch({
        label,
        uploadData: storageId,
        numCalls,
        cost,
      });

      // form.reset();
      // setStorageId("");
      // setCompleted(false);
      // setResponseData(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files) {
      return;
    }
    const fileArray = Array.from(files);
    if (fileArray.length === 0) {
      return;
    }

    const uploaded = await startUpload(fileArray);
    const fileStorageId = (uploaded[0].response as any).storageId;
    setStorageId(fileStorageId);
  };

  return (
    <div className="relative overflow-hidden">
      <form onSubmit={handleFormSubmit}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-between pb-20 space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Batch Name</Label>
            <Input name="label" placeholder="Give this Call Batch a name..." />
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Call Data
            </h1>
            <p className="text-xs">
              Upload your call data in CSV format. The first row should be the
              headers of the table, and your headers should not include any
              special characters other than hyphens (-) or underscores (_). The
              column containing phone numbers must have a header labeled as
              "phone_number".
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              accept=".csv, .xls, .xlsx"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="w-auto cursor-pointer mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white"
            >
              <div className="flex flex-row items-center justify-center space-x-2">
                <h1>Choose CSV File</h1>
                <FileSpreadsheet />
              </div>
            </label>
            <div className="mt-2">
              {storageId ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="mr-2" />
                  File uploaded successfully
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <XCircle className="mr-2" />
                  No file uploaded
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex">
            <Button type="submit" className="w-auto">
              Submit Batch Request
            </Button>
          </div>
          {completed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-4 text-green-500"
            >
              Request Completed!
            </motion.div>
          )}
          {responseData && (
            <div className="mt-4 p-4 border border-gray-200 rounded">
              <h3 className="text-lg font-semibold">Response Data:</h3>
              <pre className="text-sm whitespace-pre-wrap">
                {JSON.stringify(responseData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Calls;
