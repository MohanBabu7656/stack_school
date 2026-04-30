import { execSync } from 'child_process';

// Helper function to get the last commit date of a specific file
function getLastModified(filePath) {
  try {
    const date = execSync(`git log -1 --format="%cI" "${filePath}"`).toString().trim();
    return date ? new Date(date).toISOString().split('T')[0] : '2024-05-22';
  } catch (error) {
    return '2024-05-22'; // Fallback date if Git is unavailable
  }
}

export default function sitemap() {
  const baseUrl = 'https://stackschool.in';

  return [
    {
      url: baseUrl,
      lastModified: getLastModified('app/page.jsx'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: getLastModified('app/courses/page.jsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses/python`,
      lastModified: getLastModified('app/courses/python/page.jsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses/java`,
      lastModified: getLastModified('app/courses/java/page.jsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: getLastModified('app/apply/page.jsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/placements`,
      lastModified: getLastModified('app/placements/page.jsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: getLastModified('app/about/page.jsx'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: getLastModified('app/contact/page.jsx'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/referral`,
      lastModified: getLastModified('app/referral/page.jsx'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
