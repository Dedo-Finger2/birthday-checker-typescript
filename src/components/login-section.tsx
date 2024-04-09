import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

import { LoginForm } from "./login-form";

import { LogIn, Inbox } from "lucide-react";

import { changelog } from "./../changelog.json";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Separator } from "./ui/separator";

const changelogSchema = z.object({
  date: z.string(),
  changes: z.array(
    z.object({
      title: z.string(),
      desc: z.string(),
    })
  ),
});

type ChangeLog = z.infer<typeof changelogSchema>;

export function LoginSection() {
  const [changes, setChanges] = useState<ChangeLog[]>([]);

  useEffect(() => {
    const formattedChangelog = changelog.map((change) => {
      return {
        date: change.date,
        changes: change.changes.map((item) => {
          const [title, desc] = item.split("[");
          return {
            title,
            desc,
          };
        }),
      };
    });

    setChanges(formattedChangelog);
  }, []);

  return (
    <div className="flex items-end justify-end p-4 gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-blue-500 flex flex-row gap-2 hover:bg-blue-800">
            <Inbox className="size-5" />
            Changelog
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Changelog</SheetTitle>
            <SheetDescription>
              Mudanças que foram feitas no sistema até o dado momento.
            </SheetDescription>
          </SheetHeader>
          <Separator className="my-4" />
          {changes?.map((change) => (
            <div>
              <p className="text-lg font-bold py-2">{change.date}</p>
              <ul className="flex flex-col gap-3">
                {change.changes.map((item) => (
                  <li className="flex flex-col">
                    <span className="font-semibold">- {item.title}</span>
                    <span className="text-sm text-zinc-500 italic font-semibold pl-2">{item.desc}</span>
                  </li>
                ))}
              </ul>
              <Separator className="my-12" />
            </div>
          ))}
        </SheetContent>
      </Sheet>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-2 items-center bg-blue-500 hover:bg-blue-800">
            <LogIn className="size-4" />
            Login
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log-in</DialogTitle>
            <DialogDescription>
              Faça login para poder acessar as datas de aniversário dos amigos
              dos administrador.
            </DialogDescription>
          </DialogHeader>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
