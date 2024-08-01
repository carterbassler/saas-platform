"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "convex/react";
import React, { useEffect, useState } from "react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { Protect } from "@clerk/nextjs";

type Props = {};

type Batch = {
  id: string;
  label: string;
  created_at: string;
  num_calls: number;
  leads_generated: number;
  price_charged: number;
};

function Dashboard({}: Props) {
  const batches = useQuery(api.batches.getBatchesForUser);
  const router = useRouter();

  const handleRowClick = (batch: Batch) => {
    router.push(`/batch/${batch.id}`);
  };

  return (
    <div className="relative flex flex-col overflow-hidden gap-4">
      <div className="flex flex-row p-4 space-x-4 rounded-xl">
        <h1>Available Balance</h1>
        <h1>Total Leads Generation</h1>
      </div>
      <div className="max-w-7xl p-4 flex flex-col items-center justify-between pb-20 rounded-xl">
        {!batches ? (
          <p>Loading...</p>
        ) : (
          <Table>
            <TableCaption>A list of your recent mass calls</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Batch Name</TableHead>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Number of Calls</TableHead>
                <TableHead>Leads Generated</TableHead>
                <TableHead className="text-right">Price Charged</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow
                  key={batch._id}
                  // onClick={() => handleRowClick(batch)}
                  className="cursor-pointer"
                >
                  <TableCell className="font-medium">
                    {batch.label || "N/A"}
                  </TableCell>
                  <TableCell>
                    {new Date(batch._creationTime).toLocaleDateString() ||
                      "N/A"}
                  </TableCell>
                  <TableCell>{batch.numCalls ?? "N/A"}</TableCell>
                  <TableCell>{batch.numCalls ?? "N/A"}</TableCell>
                  <TableCell className="text-right">
                    ${batch.cost != null ? batch.cost.toFixed(2) : "N/A"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
