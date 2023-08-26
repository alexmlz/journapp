//import apiClient from "./api-client";
import create from "./http-service";

export interface Journal {
  id: number;
  content: string;
  subject: string;
  cre_date?: Date;
}

/* class JournalService {
  getAllJournals() {
    const controller = new AbortController();
    const request = apiClient.get<Journal[]>("/journals/", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteJournal(id: number) {
    return apiClient.delete("/journal/" + id + "/");
  }

  createJournal(journal: Journal) {
    return apiClient.post("/journals/", journal);
  }

  updateJournal(journal: Journal, id: number) {
    return apiClient.put("/journal/" + id + "/", journal);
  }
} */

export default create("journals/", "journal/");
