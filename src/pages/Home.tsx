import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Clapperboard,
  Upload,
  Container,
  Cpu,
  CloudUpload,
  Database,
  FileVideo,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const pipeline = [
  {
    icon: Upload,
    title: "Upload",
    description:
      "Drop in a source video from the browser. It's streamed straight into an S3 bucket before anything else happens.",
  },
  {
    icon: Container,
    title: "ECS container spins up",
    description:
      "A Fargate task starts from a Dockerfile that references the uploaded object in S3, so each job runs in its own clean container.",
  },
  {
    icon: Cpu,
    title: "ffmpeg transcodes",
    description:
      "Inside the container, ffmpeg encodes the source into every target format and bitrate ladder it needs to produce.",
  },
  {
    icon: CloudUpload,
    title: "Renditions ship to S3",
    description:
      "Finished outputs are uploaded back to S3 under their own keys, separate from the original source file.",
  },
  {
    icon: Database,
    title: "Metadata lands in Supabase",
    description:
      "Playback URLs, formats, and job status are written to Supabase so the frontend can query what's ready to stream.",
  },
];

const formats = [
  { name: "MP4", detail: "H.264 / AAC — universal playback" },
  { name: "WebM", detail: "VP9 / Opus — smaller, web-native" },
  { name: "MOV", detail: "ProRes — editing & archival quality" },
  { name: "HLS", detail: "Adaptive bitrate — smooth streaming" },
];

export default function Home() {
  const navigate = useNavigate();

  const scrollToPipeline = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clapperboard className="h-6 w-6 text-amber-500" />
          <span className="font-bold text-xl tracking-tight">Transcodr</span>
        </div>
        <nav className="hidden md:flex items-center gap-8" />
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex"
            onClick={scrollToPipeline}
          >
            Read the docs
          </Button>
          <Button
            variant="amber"
            size="lg"
            onClick={() => navigate("/demo")}
          >
            Watch demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
            every format, from one upload
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            upload a video and a containerized ffmpeg pipeline on ECS
            transcodes it into every format you need, then ships the results
            to S3 and Supabase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="amber" size="lg" onClick={() => navigate("/demo")}>
              Watch demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToPipeline}>
              Read the docs
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            how it works
          </h2>
          <p className="text-zinc-400 text-lg">
            every upload moves through the same five-step pipeline, end to
            end.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {pipeline.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-5 items-start rounded-xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="h-11 w-11 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-amber-500" />
                </div>
                <span className="text-xs text-zinc-600 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 border-t border-zinc-900">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            four formats, every time
          </h2>
          <p className="text-zinc-400 text-lg">
            each job renders the same source into the formats that cover
            nearly every playback target.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {formats.map((format) => (
            <div
              key={format.name}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-center"
            >
              <FileVideo className="h-6 w-6 text-amber-500 mx-auto mb-3" />
              <div className="font-bold text-lg mb-1">{format.name}</div>
              <div className="text-sm text-zinc-500">{format.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Clapperboard className="h-5 w-5 text-amber-500" />
            <span className="font-bold">Transcodr</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
