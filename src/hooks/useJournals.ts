import { useEffect, useState } from "react";
import journalService, { Journal } from "../services/journal-service";
import { CanceledError } from "../services/api-client";

const useJournals = () => {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = journalService.getAll<Journal>();
    request
      .then((res) => {
        setJournals(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { journals, error, isLoading, setJournals, setError };
};

export default useJournals;
