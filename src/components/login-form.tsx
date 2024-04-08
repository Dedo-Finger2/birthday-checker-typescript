import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { LogIn } from "lucide-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  username: z
    .string({ required_error: "O campo nome é obrigatório." })
    .min(2, { message: "O nome precisa ter no mínimo 2 caracteres." }),
  password: z
    .string({ required_error: "O campo senha é obrigatório" })
    .min(6, { message: "A senha precisa possuir ao menos 6 caracteres" }),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  function handleLogin(data: LoginFormSchema) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row gap-4 items-center">
                <FormLabel className="text-end">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome..." {...field} />
                </FormControl>
              </div>
              <FormDescription className="text-end">
                <FormMessage className="text-end" />
                Digite o nome de usuário.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row gap-4 items-center">
                <FormLabel className="text-end">Senha</FormLabel>
                <FormControl>
                  <Input placeholder="Senha..." {...field} />
                </FormControl>
              </div>
              <FormDescription className="text-end">
                <FormMessage className="text-end" />
                Digite a senha de usuário.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="flex flex-row gap-2 items-center justify-center bg-blue-600 hover:bg-blue-800"
        >
          <LogIn className="size-5" />
          <span>Log-in</span>
        </Button>
      </form>
    </Form>
  );
}
