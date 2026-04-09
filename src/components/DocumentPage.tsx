import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DocumentPageProps {
  children: ReactNode;
  showHeader?: boolean;
  className?: string;
}

const DocumentPage = ({ children, className = "" }: DocumentPageProps) => {
  return (
    <section className={cn("relative w-full bg-white", className)}>
      <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        {children}
      </div>
    </section>
  );
};

export default DocumentPage;
