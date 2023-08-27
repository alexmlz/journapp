import ListGroup from "./components/ListGroup";
import journalService, { Journal } from "./services/journal-service";
import useJournals from "./hooks/useJournals";
import useUsers from "./hooks/useUsers";
import Login from "./components/login";
import Register from "./components/register";
import { useState } from "react";

function App() {
  const { journals, error, isLoading, setJournals, setError } = useJournals();
  const { isLoggedIn } = useUsers();

  const [setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState();

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleDeleteItem = (journal: Journal) => {
    const originalJournals = [...journals];
    setJournals(journals.filter((j) => j.id !== journal.id));
    journalService.delete(journal.id).catch((err) => {
      setError(err.message);
      setJournals(originalJournals);
    });
  };

  const handleAddItem = () => {
    const originalJournals = [...journals];
    let newId = journals.length + 1;
    const newJournal = {
      id: newId,
      subject: "Subject No" + newId,
      content:
        newId +
        " neuer Inhalt für ein Journal die nummer vorne soll nur zeigen das es unterscheidliche sind ",
    };
    //setJournals([newJournal, ...journals]);

    journalService
      .create(newJournal)
      .then(({ data }) => setJournals([data, ...journals]))
      .catch((err) => {
        setError(err.message);
        setJournals(originalJournals);
      });
  };

  const handleUpdateItem = (journal: Journal) => {
    const originalJournals = [...journals];
    const updateJournal = { ...journal, subject: "! " + journal.subject };
    setJournals(journals.map((j) => (j.id === journal.id ? updateJournal : j)));
    journalService.update(updateJournal).catch((err) => {
      setError(err.message);
      setJournals(originalJournals);
    });
  };

  const RegisterLogin = ({ setUser }: any) => {
    return (
      <div className="register-login">
        <Login setUser={setUser} setCurrentUser={setCurrentUser} />
        <p>If you do not have an account yet, please register!</p>
        <Register setUser={setUser} setCurrentUser={setCurrentUser} />
      </div>
    );
  };

  return (
    <>
      {currentUser || isLoggedIn ? (
        <>
          {error && <p className="text-danger">{error}</p>}
          {isLoading ? (
            <div className="spinner-border"></div>
          ) : (
            <ListGroup
              items={journals}
              heading="Entries"
              onSelectItem={handleSelectItem}
              onDeleteItem={handleDeleteItem}
              onAddItem={handleAddItem}
              onUpdateItem={handleUpdateItem}
            />
          )}
        </>
      ) : (
        <RegisterLogin setUser={setUser} />
      )}
    </>
  );
}

export default App;
