"use client";

import { Button } from '@/components/ui/button';
import { useAction, useMutation } from 'convex/react';
import React from 'react'
import { api } from '../../../convex/_generated/api';
import { useRouter } from 'next/navigation';

type Props = {}

function Settings({}: Props) {

  return (
    <div>
      <h1>Settings</h1>
    </div>
  )
}

export default Settings