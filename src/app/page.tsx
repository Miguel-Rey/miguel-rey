import data from "@/app/data";
import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { Typewritter } from "@/components/typewritter";

const { projects, contact } = data;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col lg:justify-between py-4 lg:py-8">
      <h1 className="sr-only">Miguel Rey</h1>

      <div className="p-6 max-w-lg lg:p-12 h-56">
        <Typewritter />
      </div>

      <div className="lg:flex-1 flex flex-col justify-end gap-6">
        <Contact items={contact} />
        <Projects projects={projects} />
      </div>
    </main>
  );
}
