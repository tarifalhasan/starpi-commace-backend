"use server";

import Hero from "@/components/Hero";

async function getSlideImages() {
  try {
    const res = await fetch(
      "http://localhost:1337/api/home-image-sliders?populate=*",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} - ${res.statusText}`);
    }
    const images = await res.json();
    return images;
  } catch (error) {
    console.error("Error fetching images:", error.message);
    throw error; // rethrow the error to handle it in the calling code
  }
}

export default async function Home() {
  const images = await getSlideImages();
  console.log(images);
  return (
    <main>
      <Hero images={images.data} />
    </main>
  );
}
