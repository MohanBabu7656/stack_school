import React from 'react';
import JavaPageContent from './JavaPageContent';

export const metadata = {
  title: 'Java Fullstack Course | Enterprise Software Development | Stack School',
  description: 'Master Java Fullstack development with Spring Boot, Angular, and Microservices. 12-week intensive track designed for enterprise-grade architecture and job readiness.',
  keywords: ['java fullstack course', 'spring boot bootcamp', 'angular training', 'microservices course', 'enterprise java', 'java developer jobs'],
  alternates: {
    canonical: '/courses/java',
  },
};

export default function JavaCoursePage() {
  return <JavaPageContent />;
}