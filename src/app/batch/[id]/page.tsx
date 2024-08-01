"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Batch = {
  id: string;
  label: string;
  created_at: string;
  num_calls: number;
  leads_generated: number;
  price_charged: number;
};

const BatchDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [batch, setBatch] = useState<Batch | null>(null);

  useEffect(() => {
    const batchData = {
      id: searchParams.get("id"),
      label: searchParams.get("label"),
      created_at: searchParams.get("created_at"),
      num_calls: searchParams.get("num_calls"),
      leads_generated: searchParams.get("leads_generated"),
      price_charged: searchParams.get("price_charged"),
    };
    setBatch(batchData as unknown as Batch);
  }, [searchParams]);

  if (!batch) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Batch Detail for {batch.label}</h1>
      <p>ID: {batch.id}</p>
      <p>Date: {new Date(batch.created_at).toLocaleDateString()}</p>
      <p>Number of Calls: {batch.num_calls}</p>
      <p>Leads Generated: {batch.leads_generated}</p>
    </div>
  );
};

export default BatchDetail;
