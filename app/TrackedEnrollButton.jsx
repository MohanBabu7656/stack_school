'use client';

import React from 'react';
import { track } from '@vercel/analytics';

export default function TrackedEnrollButton({ courseName, href, className, children }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track('Enrollment Clicked', { course: courseName })}
    >
      {children}
    </a>
  );
}