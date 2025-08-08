import { useEffect, useState, type FC } from "react";
import JobListing from "./JobListing";
import type { Job } from "./JobListing";
import { ClipLoader } from "react-spinners";

interface JobListingsProps {
  isHome?: boolean;
}

const JobListings: FC<JobListingsProps> = ({ isHome = false }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        setLoading(true);
        fetch(apiUrl).then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            setJobs(data);
          } else {
            console.error("Failed to fetch jobs");
          }
        });
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  if (loading) {
    <ClipLoader
      color={"#4338ca"}
      loading={loading}
      cssOverride={{
        display: "block",
        margin: "100px auto",
      }}
      size={150}
    />;
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
