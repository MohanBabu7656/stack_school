'use client';

import React from 'react';
import { track } from '@vercel/analytics';
import Link from 'next/link';

export default function TrackedEnrollButton({ courseName, href, className, children, target }) {
  const isInternal = href && href.startsWith('/');

  if (isInternal) {
    return (
      <Link href={href} className={className} target={target} onClick={() => track('Enrollment Clicked', { course: courseName })}>
        {children}
      </Link>
    );
  }

  return (
    <a 
      href={href}
      target={target || "_blank"}
      rel="noopener noreferrer"
      className={className}
      onClick={() => track('Enrollment Clicked', { course: courseName })}
    >
      {children}
    </a>
  );
}