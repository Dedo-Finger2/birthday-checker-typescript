import Logo from "./../assets/logo.svg";

export function Header() {
  return (
    <div>
      <div className="flex flex-col gap-2 items-center">
        <img className="size-32" src={Logo} alt="logo" />
        <h1 className="text-4xl font-semibold flex items-center gap-2">
          <span className="text-[24px] lg:text-4xl">🎊</span> 
          Birthday Checker 
          <span className="text-[24px] lg:text-4xl">🎊</span>
        </h1>
        <h2 className="text-sm font-semibold italic text-zinc-500">
          Saiba a{" "}
          <span className="text-blue-600 font-bold">data de aniversário</span>{" "}
          das pessoas da família!
        </h2>
      </div>
    </div>
  );
}
