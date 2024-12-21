/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jvOgkyh3xyN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Manrope } from "next/font/google";
import { Snowflake } from "~/stories/icons/snowflake";
import { Databricks } from "~/stories/icons/databricks";
import { S3 } from "~/stories/icons/s3";

const manrope = Manrope({
  subsets: ["latin"],
});

interface GridCardProps {
  imgSource: string;
  description: string;
  title: string;
  integration: string[];
}

export default function GridCard({
  imgSource,
  description,
  title,
  integration,
}: GridCardProps) {
  return (
    <div className={`mx-auto w-full max-w-[300px] ${manrope.className}`}>
      <div className="space-y-[6px] overflow-hidden rounded-lg border border-[#27272A] bg-[#09090B] hover:bg-[#18181B] p-2 shadow-lg transition-all duration-300">
        <img
          src={imgSource}
          alt="Product Image"
          width={587}
          height={382}
          className="h-64 w-full rounded-sm border border-[#27272A] object-cover"
          style={{ aspectRatio: "587/382", objectFit: "cover" }}
        />
        <div className="space-y-1 border-b border-[#27272A] pb-[10px]">
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-xs text-[#A1A1AA] text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-[10px] py-[6px] px-1">
          {integration.map((integration, index) => (
            <div
              key={`${integration}-${index}`}
            className="flex flex-shrink-0 items-center"
          >
            {integration === "Snowflake" && (
              <Snowflake width={20} height={20} />
            )}
            {integration === "S3" && <S3 width={20} height={20} />}
            {integration === "Databricks" && (
              <Databricks width={20} height={20} />
            )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
