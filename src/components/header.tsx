export function Header() {
  return (
    <div>
      <div className="flex flex-col gap-2 items-center">
        <img src="#" alt="logo" />
        <h1 className="text-4xl font-semibold">🎊 Birthday Checker 🎊</h1>
        <h2 className="text-sm font-semibold italic text-zinc-500">
          Saiba a{" "}
          <span className="text-blue-600 font-bold">data de aniversário</span>{" "}
          das pessoas da família!
        </h2>
      </div>
    </div>
  );
}
