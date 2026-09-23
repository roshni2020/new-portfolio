import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectClient } from "@/components/sections/ProjectClient";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}
