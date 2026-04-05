import { ProjectIdLayout } from "@/features/projects/components/project-id-layout";
import { Id } from "../../../../convex/_generated/dataModel";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectId: string }>;
}) {
  // ✅ Next.js 16: params is Promise
  const { projectId } = await params;

  // ✅ Convert to Convex Id
  const convexProjectId = projectId as Id<"projects">;

  return (
    <ProjectIdLayout projectId={convexProjectId}>
      {children}
    </ProjectIdLayout>
  );
}