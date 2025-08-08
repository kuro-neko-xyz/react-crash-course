import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MainLayout from "./layouts/MainLayout.tsx";
import JobsPage from "./pages/JobsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import JobPage from "./pages/JobPage.tsx";
import jobLoader from "./loaders/jobLoader.ts";
import AddJobPage from "./pages/AddJobPage.tsx";

const root = createRoot(document.getElementById("root")!);

const addJob = async (job: {
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone?: string;
  };
}) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  const data = await res.json();
  console.log("Job added:", data);
};

const deleteJob = async (id: string) => {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  console.log("Job deleted", id);
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<JobsPage />} />
      <Route path="add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
    </Route>
  )
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
