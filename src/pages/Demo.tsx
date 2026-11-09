import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Demo() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-screen items-center bg-black flex-col gap-6 px-4 py-12">
      <div className="w-full max-w-4xl aspect-video rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
        <video
          className="w-full h-full object-contain"
          controls
          playsInline
          preload="metadata"
        >
          <source
            src="https://ik.imagekit.io/rofktvdsm/WhatsApp%20Video%202026-11-08%20at%2011.11.47%20PM.mp4?updatedAt=1794201204886"
            type="video/mp4"
          />
          Your browser does not support embedded videos.
        </video>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Button>
      </div>
    </div>
  );
}
