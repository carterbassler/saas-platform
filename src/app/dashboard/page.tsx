"use client";

import TableOne from "@/components/table";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React, { useState } from "react";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between pb-20">
        <Table>
          <TableCaption>A list of your recent mass calls</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Number of Calls</TableHead>
              <TableHead>Leads Generated</TableHead>
              <TableHead className="text-right">Price Charged</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">12/20/24</TableCell>
              <TableCell>250</TableCell>
              <TableCell>25</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
