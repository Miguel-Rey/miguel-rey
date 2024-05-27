import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { Typewritter } from "@/components/typewritter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between py-8">
      <div className="p-12 max-w-lg">
        <Typewritter />
      </div>

      <div className="flex-1 flex flex-col justify-end gap-6">
        <Contact />
        <Projects />
      </div>
    </main>
  );
}
