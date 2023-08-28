import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;
  updateEndpoint: string;
  constructor(endpoint: string, updateEndpoint: string) {
    this.endpoint = endpoint;
    this.updateEndpoint = updateEndpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    return apiClient.delete(this.updateEndpoint + id + "/");
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.put(this.updateEndpoint + entity.id + "/", entity);
  }

  get(id: number | string) {
    return apiClient.get(this.updateEndpoint + id + "/");
  }
}

const create = (endpoint: string, updateEndpoint: string) =>
  new HttpService(endpoint, updateEndpoint);

export default create;
