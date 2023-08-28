import journalService, { Journal } from "../services/journal-service";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const useJournal = () => {
  let obj = {} as Journal;
  const [journal, setJournal] = useState(obj);
  const { id } = useParams();
  /*   let idInt: number;
  idInt = Number(id); */
  useEffect(() => {
    journalService.get(id!).then((res) => {
      setJournal(res.data);
    });
  }, []);

  return { journal };
};

export default useJournal;
