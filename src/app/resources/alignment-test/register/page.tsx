import { Suspense } from "react";
import { RoleSelector } from "./RoleSelector";

export const metadata = {
  title: "Login or Register to Connect EC",
  description:
    "Login or register to access Connect EC for candidates, recruiters, and employers. Get started and manage your hiring journey in one place.",
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="px-[5%] mt-[15%] md:mt-0">
      <RoleSelector />
      </div>
    </Suspense>
  );
}