import type { Metadata } from "next";
import ProgramDetailTemplate from "../_components/ProgramDetailTemplate";
import { programDetails } from "@/lib/content/programDetails";

const data = programDetails.manage;

export const metadata: Metadata = {
  title: data.name,
  description: data.subhead,
};

export default function ManagePage() {
  return <ProgramDetailTemplate slug="manage" />;
}
