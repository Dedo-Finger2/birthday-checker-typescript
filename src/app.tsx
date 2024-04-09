import { Header } from "./components/header";
import { LoginSection } from "./components/login-section";

import { useEffect, useState } from "react";
import Data from "./database.json";
import { RegularBirthdayList } from "./components/regular-birthday-list";

import { Person } from "./interfaces/person";
import { BirthdayRegisterMessage } from "./components/birthday-register-message";

export function App() {
  const [data, setData] = useState<Person[]>([]);
  const [todayDate, setTodayDate] = useState<string>(new Date().toString());

  function getPrettyDate() {
    const dias = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];

    const newDay = new Date();
    const day = String(newDay.getDate()).padStart(2, "0");
    const month = String(newDay.getMonth() + 1).padStart(2, "0"); // Os meses são de 0 a 11, então adicionamos 1 para obter o mês correto.
    const year = newDay.getFullYear();
    const weekDay = dias[newDay.getDay()]; // getDay() retorna o dia da semana como um número de 0 (Domingo) a 6 (Sábado).

    const prettyDate = weekDay + " - " + day + "/" + month + "/" + year;

    return prettyDate;
  }

  useEffect(() => {
    const todayString = new Date().toLocaleDateString();
    const today = new Date(todayString);

    const todayFormatted = today.toISOString().slice(0, 10); // yyyy-mm-dd

    const peopleToday = Data.people.filter(
      (person) =>
        person.birthdate === todayFormatted && person.special === false
    );

    setData(peopleToday);
    setTodayDate(getPrettyDate());
  }, []);

  return (
    <div>
      <LoginSection />
      <Header />
      <div className="flex flex-col gap-12 items-center justify-center">
        <RegularBirthdayList data={data} todayDate={todayDate} />
        <BirthdayRegisterMessage />
      </div>
    </div>
  );
}
