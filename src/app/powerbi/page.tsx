import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col ">
        <span className="flex gap-2">
          <h1>Power BI</h1>
          <a className="text-blue-500 underline pointer" href="/">
            Atrás
          </a>
        </span>
        <div className="w-full h-96 flex flex-col gap-1">
          <p>Custom</p>
          <iframe
            title="inventario-carros"
            width="1140"
            height="800"
            src="https://app.powerbi.com/reportEmbed?reportId=5d4612fd-8d8f-4c9d-9bb1-02b527234099&autoAuth=true&embeddedDemo=true"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
          <p>Ejemplo</p>
          <iframe
            title="Sample Report Demo"
            width="1140"
            height="800"
            src="https://playground.powerbi.com/sampleReportEmbed"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Page;
