/**
 * Airtable service for fetching blog posts
 */

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = "Blog";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedDate: string;
  category: string;
}

interface AirtableRecord {
  id: string;
  fields: {
    Title?: string;
    Slug?: string;
    Excerpt?: string;
    Content?: string;
    "Cover Image"?: string;
    "Published Date"?: string;
    Category?: string;
    Status?: string;
  };
  createdTime: string;
}

interface AirtableResponse {
  records: AirtableRecord[];
}

function mapRecordToPost(record: AirtableRecord): BlogPost {
  return {
    id: record.id,
    title: record.fields.Title || "",
    slug: record.fields.Slug || record.id,
    excerpt: record.fields.Excerpt || "",
    content: record.fields.Content || "",
    coverImage: record.fields["Cover Image"] || "",
    publishedDate: record.fields["Published Date"] || record.createdTime,
    category: record.fields.Category || "Update",
  };
}

/**
 * Fetch all published blog posts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const filterFormula = encodeURIComponent('{Status}="Published"');
  const sortField = encodeURIComponent('Published Date');
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(TABLE_NAME)}?filterByFormula=${filterFormula}&sort[0][field]=${sortField}&sort[0][direction]=desc`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Airtable API error:", response.status, errorText);
    throw new Error("Failed to fetch blog posts");
  }

  const data: AirtableResponse = await response.json();
  return data.records.map(mapRecordToPost);
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filterFormula = encodeURIComponent(`AND({Slug}="${slug}",{Status}="Published")`);
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(TABLE_NAME)}?filterByFormula=${filterFormula}&maxRecords=1`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Airtable API error:", response.status, errorText);
    throw new Error("Failed to fetch blog post");
  }

  const data: AirtableResponse = await response.json();

  if (data.records.length === 0) {
    return null;
  }

  return mapRecordToPost(data.records[0]);
}
