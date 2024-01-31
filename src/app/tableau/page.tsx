"use client";

import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col ">
        <span className="flex gap-2">
          <h1>Tableu</h1>
          <a className="text-blue-500 underline pointer" href="/">
            Atrás
          </a>
        </span>
        <div className="w-full flex flex-col gap-4 h-screen ">
          <p>Custom</p>
          <TableauEmbed
            sourceUrl="https://public.tableau.com/views/RegionalSampleWorkbook/Storms"
            device="desktop"
            height="800"
            width="100%"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
