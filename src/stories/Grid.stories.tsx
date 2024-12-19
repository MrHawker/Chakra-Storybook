import type { Meta, StoryObj } from "@storybook/react";
import GridCard from "~/app/_components/ui/GridCard";

const meta: Meta<typeof GridCard> = {
  title: "Components/Workspaces/GridCard",
  component: GridCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable GridCard component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GridCard>;

export const Resting: Story = {
  args: {
    imgSource: "https://s3-alpha-sig.figma.com/img/55ab/5188/2d53e250e73ee590ede693b982e30812?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7ii6xWdohEyCFeJVT-zUAH66rcT8Y8qZTjoL-ir-g2osVz9kCuMeofWDB~I8dZ~~2N8c4lcWd8lSlYxD-fUMKIKZncp8z6Id5edmjd0mhWpX73H-SQODBzMXsxnfX~svAJZhny9nRF-mdgH7ihHNAfleekT~BWEregI9jG7QYkq4fY~-C1VqCsmN4OZ3DjDVlWjqFRfMpiVWgi~5-G5W7TcWpAHQENzSdb61Z1pb9J6KXjGd-SO9AmIf5yPlZh59eH2Z9jAZMjSAd89U4tdnTunIzzQPnLKJ~o24Dpni7kgNfr0pzvJG94LwLmKDHun7QS~NKdDz-UkGr2Y30Jl2w__",
    title: "BTC-Snowflake-Pipeline",
    description: "BTC-Snowflake-Pipeline",
    integration: ["Snowflake", "S3", "Databricks"],
  },
};
