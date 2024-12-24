import { Manrope } from "next/font/google";
import { QuickStartFooter } from "./QuickStartFooter";
import { Input } from "./input";
import {
  ExternalLink,
  FileSpreadsheet,
  ImagePlus,
  Plus,
  TableProperties,
  Upload,
} from "lucide-react";
import { Button } from "./button";
import { useState, useRef } from "react";
import Dropzone from "react-dropzone";

const manrope = Manrope({ subsets: ["latin"] });

export function QuickStartUploadTable() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div
      className={`${manrope.className} space-y-6 rounded border border-[#27272A] bg-[#09090B] pt-12 md:min-w-[450px]`}
    >
      <div className="space-y-3 px-9">
        <Input
          required
          label="Table Name"
          placeholder="Give your Integration a name"
          labelIcon={<TableProperties />}
        />
        <Dropzone
          onDrop={(acceptedFiles) =>
            setSelectedFile(acceptedFiles.at(0) as File)
          }
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <section>
              {selectedFile ? (
                <div className="flex items-center gap-2 rounded-lg border border-[#06B6D4] bg-[#083344] p-3 text-[#06B6D4]">
                  <FileSpreadsheet className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Uploaded {selectedFile.name}
                  </span>
                </div>
              ) : (
                <div
                  className={`flex h-[120px] items-center justify-center rounded-lg bg-[#18181B] px-4 py-2 text-[#A1A1AA] hover:cursor-pointer ${isDragActive ? "border-2 border-dashed border-[#061bd4]" : ""}`}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <p className="flex items-center gap-2 text-base font-semibold">
                    <ImagePlus className="h-4 w-4" />
                    <span className="text-[#A1A1AA]">
                      Or Drop a File Here to upload
                    </span>
                  </p>
                </div>
              )}
            </section>
          )}
        </Dropzone>
        <input
          required
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <Button
          onClick={handleFileClick}
          className={`flex w-full items-center rounded-sm border transition-all duration-300 ${selectedFile ? "border-[#022C22] bg-[#34D399] text-[#022C22] hover:bg-[#10B981]" : "border-[#52525B] bg-transparent text-[#52525B]"} px-4 py-2`}
        >
          <Upload className="h-4 w-4" />
          <span className="text-lg font-semibold">
            {selectedFile ? "Upload" : "Select File to Upload"}
          </span>
        </Button>
        <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
          <span className="flex items-stretch gap-3">
            <span className="flex items-center gap-1 px-1 transition-all duration-300 hover:cursor-pointer hover:text-white">
              <input 
                className="rounded border border-[#27272A] bg-transparent checked:bg-[#52525B]" 
                type="checkbox" 
              />
              <label>Skip rows with errors?</label>
            </span>
            <span className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-white">
                <input type="checkbox" />
                <label>Replace existing table?</label>
            </span>
          </span>

          <a href="https://www.npmjs.com/package/react-dropzone" className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:cursor-pointer ">
            <label className="font-semibold hover:cursor-pointer">Read Docs</label>
            <ExternalLink width={10.67} height={10.67} />
          </a>
        </div>
      </div>

      <QuickStartFooter />
    </div>
  );
}
