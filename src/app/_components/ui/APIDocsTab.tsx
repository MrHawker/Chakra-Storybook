import {
  CheckCheck,
  Copy,
  Info,
  KeySquare,
  Plug,
  Terminal,
} from "lucide-react";
import { Manrope, Ubuntu_Mono } from "next/font/google";
import { useState } from "react";
import { APIKey } from "./APIKey";

const manrope = Manrope({ subsets: ["latin"] });
const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });
interface APIDocsTabProps {
  apiKey: string;
  bashCode: string;
}

export function APIDocsTab({ apiKey, bashCode }: APIDocsTabProps) {
  const [isCopied, setIsCopied] = useState(false);
  const formattedBashCode = bashCode.split(" \\").map((line, index) => (
    <span key={index} className="block">
      {line.trim()}
      {index !== bashCode.split(" \\").length - 1 && " \\"}
    </span>
  ));
  return (
    <div className={`${manrope.className} space-y-3 py-2 `}>
      <header className="space-y-3 border border-x-0 border-[#27272A] py-2">
        <h2 className="flex items-center gap-2 text-white">
          <Plug className="h-8 w-8" />
          <span className="text-2xl font-semibold">API Reference</span>
        </h2>
        <p className="text-[#A1A1AA]">
          Programmatic access to your Canvas data.
        </p>
      </header>
      <div className="space-y-3 py-2">
        <header className="space-y-3 px-2">
          <h3 className="flex items-center gap-2 text-white">
            <Terminal className="h-4 w-4" />
            <span className="text-lg font-semibold">Command Reference</span>
          </h3>
          <p className="text-[#A1A1AA]">Running your canvas</p>
        </header>
        <div className="flex items-stretch gap-[10px] overflow-x-auto rounded border border-[#27272A] bg-[#18181B] pb-3 pl-3 pr-2 pt-2">
          <div className={`${ubuntuMono.className} h-full w-full text-white`}>
            {formattedBashCode}
          </div>
          <span>
            {!isCopied ? (
              <span
                onClick={() => {
                  navigator.clipboard.writeText(bashCode);
                  setIsCopied(true);
                }}
                className="flex items-center gap-2 rounded border border-[#52525B] p-[6px] text-[#52525B] transition-colors duration-300 hover:cursor-pointer hover:border-white hover:text-white"
              >
                <Copy className="h-4 w-4" />
                <span className="text-sm font-semibold">Copy</span>
              </span>
            ) : (
              <span className="flex items-center gap-2 rounded border border-[#042F2E] bg-[#10B981] p-[6px] text-[#042F2E]">
                <CheckCheck className="h-4 w-4" />
                <span className="text-sm font-semibold">Copied</span>
              </span>
            )}
          </span>
        </div>
        <div className="space-y-3 rounded border border-[#27272A] p-3">
          <h3 className="flex items-center gap-1 text-white">
            <Info className="h-4 w-4" />
            <span className="font-semibold text-[#A1A1AA]">
              Important Notes
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3 p-3 text-[#A1A1AA]">
            <li className="text-sm">
              Ensure you keep your API key secure and never share it publicly
            </li>
            <li className="text-sm">
              <span>
                Need to rotate your key? We're working on automating this
                process. In the meantime, contact support at{" "}
              </span>
              <a
                href="mailto:hi@chakra-labs.com"
                className="font-bold underline"
              >
                hi@chakra-labs.com.
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-[#27272A]" />
      </div>
      <div className="space-y-4">
        <header className="space-y-3">
          <h2 className="flex items-center gap-2 text-white">
            <KeySquare className="h-4 w-4" />
            <span className="text-lg font-semibold">API Key</span>
          </h2>
          <p className="text-[#A1A1AA]">
            Keep your API key safe and never share it publicly.
          </p>
        </header>
        <APIKey apiKey={apiKey} />
      </div>
    </div>
  );
}
