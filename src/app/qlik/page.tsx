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
          <p>Custom</p>
          <iframe
            src="https://sense-demo.qlik.com/single/?appid=133dab5d-8f56-4d40-b3e0-a6b401391bde&sheet=kHgmg"
            title="Sample Report Demo"
            width="1140"
            height="700"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Page;
