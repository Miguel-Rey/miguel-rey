import { Projects } from "@/components/projects";
import { Typewritter } from "@/components/typewritter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col py-8">
      <div className="p-12 max-w-lg">
        <Typewritter />
      </div>

      <div className="flex-1 flex items-end">
        <Projects />
      </div>
    </main>
  );
}
