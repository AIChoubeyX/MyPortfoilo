import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Boxes } from "@/components/ui/background-boxes";

const Contact = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <MainLayout>
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-4 md:px-8 py-8 bg-gray-100">
        <div className="h-72 relative w-full max-w-2xl overflow-hidden bg-gray-100 rounded-lg flex flex-col items-start justify-start p-6 -mt-16">
          {/* Background Boxes */}
          <div className="absolute inset-0 w-full h-full bg-gray-100 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />

          {/* Content Container - Relative Z Index */}
          <div className="w-full relative z-20 flex flex-col h-full justify-between">
            {/* Heading */}
            <h1
              className="text-3xl md:text-5xl font-semibold text-slate-900"
              style={{
                fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
              }}
            >
              Contact
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg text-slate-600 mt-2"
              style={{
                fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
              }}
            >
              If you're building in / excited about AI or just wanna chat, say
              hi on LinkedIn!
            </p>

            {/* LinkedIn Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-2 flex items-center justify-between gap-3 w-full mt-2">
              <div className="flex items-center gap-2 flex-1">
                <div className="bg-slate-900 text-white w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.554s.05-8.746 0-9.637h3.554v1.364c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.684 1.375 3.684 4.331l.001 5.528zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.906-1.704.954 0 1.914.753 1.914 1.704 0 .946-.96 1.704-1.905 1.704zm1.614 11.597H3.615V9.27h3.336v11.182zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
                <p
                  className="text-xs md:text-sm text-slate-700"
                  style={{
                    fontFamily:
                      '"Inter", system-ui, -apple-system, sans-serif',
                  }}
                >
                  Connect on{" "}
                  <span className="font-medium text-slate-900">LinkedIn</span>
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/ashutosh-choubey-46695928b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center flex-shrink-0"
              >
                <button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm font-medium transition-colors">
                  Follow
                </button>
              </a>
            </div>

            {/* Call Button */}
            <button
              data-cal-namespace="15min"
              data-cal-link="ashutosh-choubey-2x5uzg/15min"
              data-cal-config='{"layout":"month_view"}'
              className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-2 md:px-3 py-0.5 text-xs font-medium transition-colors w-fit"
              style={{
                fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
              }}
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
