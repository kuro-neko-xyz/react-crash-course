import type { FC } from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
