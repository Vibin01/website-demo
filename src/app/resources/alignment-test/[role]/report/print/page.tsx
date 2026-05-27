import { Suspense } from "react";
import PrintClient from "./PrintClient";

type Role = "candidate" | "recruiter" | "employer";

export default async function PrintPage({
  params,
}: {
  params: Promise<{ role: Role }>;
}) {
  const { role } = await params;

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-xl font-bold">
          Preparing print...
        </div>
      }
    >
      <PrintClient role={role} />
    </Suspense>
  );
}