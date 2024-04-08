import { Header } from "./components/header";
import { useEffect, useState } from "react";
import Data from "./database.json";

interface Person {
  id: number;
  name: string;
  birthdate: string;
  description: string;
  special: boolean;
}

export function App() {
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    const today = new Date();
    const todayFormatted = today.toISOString().slice(0, 10); // yyyy-mm-dd

    const peopleToday = Data.people.filter(
      (person) => person.birthdate === todayFormatted
    );

    setData(peopleToday);
  }, []);

  return (
    <div>
      <Header />
      {data?.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}
    </div>
  );
}

