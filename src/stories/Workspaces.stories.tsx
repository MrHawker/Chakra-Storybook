import type { Meta, StoryObj } from "@storybook/react";
import { Workspaces } from "~/app/_components/ui/Workspaces";   
import { Data } from "~/app/_components/ui/Workspaces";
const meta: Meta<typeof Workspaces> = {
  title: "Components/Workspaces/Workspaces",
  component: Workspaces,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable Menu component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Workspaces>;

const data: Data = {
    columns: ["Name", "Last Run", "Created By", "Actions", "Integrations"],
    rows: [
      {
        name: "BTC-Snowflake-Pipeline",
        lastRun: "12 Minutes Ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks", "Databricks"],
        imgSource:
          "https://s3-alpha-sig.figma.com/img/55ab/5188/2d53e250e73ee590ede693b982e30812?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7ii6xWdohEyCFeJVT-zUAH66rcT8Y8qZTjoL-ir-g2osVz9kCuMeofWDB~I8dZ~~2N8c4lcWd8lSlYxD-fUMKIKZncp8z6Id5edmjd0mhWpX73H-SQODBzMXsxnfX~svAJZhny9nRF-mdgH7ihHNAfleekT~BWEregI9jG7QYkq4fY~-C1VqCsmN4OZ3DjDVlWjqFRfMpiVWgi~5-G5W7TcWpAHQENzSdb61Z1pb9J6KXjGd-SO9AmIf5yPlZh59eH2Z9jAZMjSAd89U4tdnTunIzzQPnLKJ~o24Dpni7kgNfr0pzvJG94LwLmKDHun7QS~NKdDz-UkGr2Y30Jl2w__",
        title: "BTC-Snowflake-Pipeline",
        description: "BTC-Snowflake-Pipeline",
      },
      {
        name: "BTC-Snowflake-Pipeline",
        lastRun: "23 hours 43 minutes ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks", "Databricks"],
        running: true,
        imgSource:
          "https://s3-alpha-sig.figma.com/img/55ab/5188/2d53e250e73ee590ede693b982e30812?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7ii6xWdohEyCFeJVT-zUAH66rcT8Y8qZTjoL-ir-g2osVz9kCuMeofWDB~I8dZ~~2N8c4lcWd8lSlYxD-fUMKIKZncp8z6Id5edmjd0mhWpX73H-SQODBzMXsxnfX~svAJZhny9nRF-mdgH7ihHNAfleekT~BWEregI9jG7QYkq4fY~-C1VqCsmN4OZ3DjDVlWjqFRfMpiVWgi~5-G5W7TcWpAHQENzSdb61Z1pb9J6KXjGd-SO9AmIf5yPlZh59eH2Z9jAZMjSAd89U4tdnTunIzzQPnLKJ~o24Dpni7kgNfr0pzvJG94LwLmKDHun7QS~NKdDz-UkGr2Y30Jl2w__",
        title: "BTC-Snowflake-Pipeline",
        description: "BTC-Snowflake-Pipeline",
      },
      {
        name: "ETH-Snowflake-Pipeline",
        lastRun: "12 Minutes Ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks"],
        imgSource:
          "https://s3-alpha-sig.figma.com/img/55ab/5188/2d53e250e73ee590ede693b982e30812?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7ii6xWdohEyCFeJVT-zUAH66rcT8Y8qZTjoL-ir-g2osVz9kCuMeofWDB~I8dZ~~2N8c4lcWd8lSlYxD-fUMKIKZncp8z6Id5edmjd0mhWpX73H-SQODBzMXsxnfX~svAJZhny9nRF-mdgH7ihHNAfleekT~BWEregI9jG7QYkq4fY~-C1VqCsmN4OZ3DjDVlWjqFRfMpiVWgi~5-G5W7TcWpAHQENzSdb61Z1pb9J6KXjGd-SO9AmIf5yPlZh59eH2Z9jAZMjSAd89U4tdnTunIzzQPnLKJ~o24Dpni7kgNfr0pzvJG94LwLmKDHun7QS~NKdDz-UkGr2Y30Jl2w__",
        title: "BTC-Snowflake-Pipeline",
        description: "BTC-Snowflake-Pipeline",
      },
      {
        name: "BTC-Snowflake-Pipeline",
        lastRun: "12 Minutes Ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks", "Databricks"],
        imgSource:
          "https://s3-alpha-sig.figma.com/img/55ab/5188/2d53e250e73ee590ede693b982e30812?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7ii6xWdohEyCFeJVT-zUAH66rcT8Y8qZTjoL-ir-g2osVz9kCuMeofWDB~I8dZ~~2N8c4lcWd8lSlYxD-fUMKIKZncp8z6Id5edmjd0mhWpX73H-SQODBzMXsxnfX~svAJZhny9nRF-mdgH7ihHNAfleekT~BWEregI9jG7QYkq4fY~-C1VqCsmN4OZ3DjDVlWjqFRfMpiVWgi~5-G5W7TcWpAHQENzSdb61Z1pb9J6KXjGd-SO9AmIf5yPlZh59eH2Z9jAZMjSAd89U4tdnTunIzzQPnLKJ~o24Dpni7kgNfr0pzvJG94LwLmKDHun7QS~NKdDz-UkGr2Y30Jl2w__",
        title: "BTC-Snowflake-Pipeline",
        description: "BTC-Snowflake-Pipeline",
      },
      {
        name: "ETH-Snowflake-Pipeline",
        lastRun: "23 hours 43 minutes ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks"],
        running: true,
        imgSource:
          "https://s3-alpha-sig.figma.com/img/55ab/5188/2d53e250e73ee590ede693b982e30812?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7ii6xWdohEyCFeJVT-zUAH66rcT8Y8qZTjoL-ir-g2osVz9kCuMeofWDB~I8dZ~~2N8c4lcWd8lSlYxD-fUMKIKZncp8z6Id5edmjd0mhWpX73H-SQODBzMXsxnfX~svAJZhny9nRF-mdgH7ihHNAfleekT~BWEregI9jG7QYkq4fY~-C1VqCsmN4OZ3DjDVlWjqFRfMpiVWgi~5-G5W7TcWpAHQENzSdb61Z1pb9J6KXjGd-SO9AmIf5yPlZh59eH2Z9jAZMjSAd89U4tdnTunIzzQPnLKJ~o24Dpni7kgNfr0pzvJG94LwLmKDHun7QS~NKdDz-UkGr2Y30Jl2w__",
        title: "BTC-Snowflake-Pipeline",
        description: "BTC-Snowflake-Pipeline",
      },
    ],
  };

export const GridDisplay: Story = {
  args: {
    list: false,
    data: data,
  },
};

export const ListDisplay: Story = {
  args: {
    list: true,
    data: data,
  },
};

