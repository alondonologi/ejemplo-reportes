const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col ">
        <span className="flex gap-2">
          <h1>QLik</h1>
          <a className="text-blue-500 underline pointer" href="/">
            Atrás
          </a>
        </span>
        <div className="w-full flex flex-col gap-4 ">
          <iframe src="https://iqzozkdk0o86ad0.us.qlikcloud.com/single/?appid=51c8d6ad-3ba4-4c2f-b508-4665d97f6d61&sheet=3337e68d-c051-4f25-95e7-f4830baea0e4&lang=es-ES&theme=breeze&bookmark=d225460e-fa51-49e6-b4bb-27231ff98b99&opt=nointeraction,noselections,currsel"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Page;
