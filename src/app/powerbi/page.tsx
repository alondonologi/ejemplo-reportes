import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col">
        <span className="flex gap-2">
          <h1>Power BI</h1>
          <a className="text-blue-500 underline pointer" href="/">
            Atrás
          </a>
        </span>
        <div className="w-full h-96">
          <iframe
            title="inventario-carros"
            width="1140"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=5d4612fd-8d8f-4c9d-9bb1-02b527234099&autoAuth=true&embeddedDemo=true"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Page;
