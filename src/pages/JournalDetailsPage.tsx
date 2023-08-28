import useJournal from "../hooks/useJournal";

const JournalDetailPage = () => {
  const { journal } = useJournal();
  return (
    <>
      Journals Detail Page{" "}
      <div>
        {journal.id}
        {journal.subject} {journal.content}
      </div>
    </>
  );
};

export default JournalDetailPage;
