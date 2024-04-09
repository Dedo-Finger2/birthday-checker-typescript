import { Person } from "./../interfaces/person";
import { NoBirthdaysTodayMessage } from "./no-birthdays-today-message";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

import { MessageCircleQuestion } from "lucide-react";

export function RegularBirthdayList({
  data,
  todayDate,
}: {
  data: Person[];
  todayDate: string;
}) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h3 className="text-lg italic font-semibold text-blue-500 underline underline-offset-8 mt-6">
        {todayDate}
      </h3>
      <h1 className="text-3xl mt-12 font-bold flex gap-2 items-center flex-row justify-center">
        <span className="text-[14px] lg:text-4xl">🎂</span> Parabéns para
        você(s) <span className="text-[14px] lg:text-4xl">🎂</span>
      </h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {data?.map((person) => (
            <Card key={person.id}>
              <CardHeader>
                <CardTitle className="text-2xl">{person.name}</CardTitle>
                <CardDescription>{person.description}</CardDescription>
                <CardContent>
                  <TooltipProvider>
                    <Tooltip>
                      <p className="flex flex-row gap-2 items-center">
                        <span>Nascido(a) em {person.birthdate}</span>
                        <TooltipTrigger asChild>
                          <MessageCircleQuestion className="size-4 text-zinc-500 hover:cursor-pointer" />
                        </TooltipTrigger>
                      </p>
                      <TooltipContent>
                        <p>
                          As vezes o ano de nascimento pode estar incorreto.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <NoBirthdaysTodayMessage />
      )}
    </div>
  );
}
