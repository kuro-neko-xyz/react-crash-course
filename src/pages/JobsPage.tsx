import type { FC } from "react";
import JobListings from "../components/JobListings";

const JobsPage: FC = () => {
  return (
    <section className="bg-blue50 px-4 py-6">
      <JobListings />
    </section>
  );
};

export default JobsPage;
