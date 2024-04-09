export function NoBirthdaysTodayMessage() {
  return (
    <div className="flex flex-col gap-3 mt-8 lg:mt-12">
      <span className="text-5xl">☹️</span>
      <span className="text-lg font-semibold">
        Parece que não tem ninguém fazendo aniversário hoje.
      </span>
    </div>
  );
}
