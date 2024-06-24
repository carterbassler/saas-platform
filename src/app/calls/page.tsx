"use client";

import TableOne from "@/components/table";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../convex/_generated/api";
import { UploadDropzone, UploadFileResponse } from "@xixixao/uploadstuff/react";
import "@xixixao/uploadstuff/react/styles.css";

type Props = {};

function Calls({}: Props) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    const options = {
      method: "POST",
      headers: {
        authorization:
          "sk-fn65o22uz5e861a8o63of8whsrbzju8rhbqb10xxsgb9p37clvxtxd70lpm7tt8069",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: "Try to get user to sell their property to you and get the asking price for the property",
        phone_number: "2039145700",
        wait_for_greeting: true,
        request_data: {
          name: "John Doe",
          property_address: "123 Main St, Anytown, USA",
        },
        analysis_schema: {
          property_asking_price: "",
        },
      }),
    };

    fetch("https://api.bland.ai/v1/calls", options)
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((err) => setError(err));
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between pb-20 space-y-3">
        <h1 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white text-3xl md:text-4xl md:leading-tight">
          Make your Leads Calls Here
        </h1>
        <div>
          <Button onClick={handleButtonClick}>Make API Call</Button>
          {response && <div>Response: {JSON.stringify(response)}</div>}
          {/* {error && <div>Error: {error.message}</div>} */}
        </div>
      </div>
    </div>
  );
}

export default Calls;
