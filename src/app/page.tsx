export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col gap-2">
        <h1>Ejemplo reportes</h1>
        <ul>
          <li className="text-blue-500 underline pointer flex flex-col gap-1">
            <a href="/powerbi">PowerBI</a>
            {/* <a href="/Google">Google Data studio</a> */}
            <a href="/tableau">Tableau</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
