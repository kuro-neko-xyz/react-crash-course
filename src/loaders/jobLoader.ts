import type { LoaderFunctionArgs } from "react-router";

const jobLoader = async ({ params }: LoaderFunctionArgs) => {
  const jobId = params.id;

  try {
    const res = await fetch(`/api/jobs/${jobId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to load job:", error);
  }
};

export default jobLoader;
