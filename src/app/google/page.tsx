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
        <div className="w-full flex flex-col gap-4 ">
          <p>Custom</p>
          <iframe
            title="Sample Report Demo"
            width="1140"
            height="700"
            src="https://playground.powerbi.com/sampleReportEmbed"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Page;
