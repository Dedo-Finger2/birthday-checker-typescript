import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";
import { Button } from "./ui/button";

import { LoginForm } from "./login-form";

import { LogIn } from "lucide-react";

export function LoginSection() {
  return (
    <div className="flex items-end justify-end p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-2 items-center bg-blue-600 hover:bg-blue-800">
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
