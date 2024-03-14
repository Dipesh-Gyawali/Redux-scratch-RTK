class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async showUsers(): Promise<Api.ShowUserPayload> {
    try {
      const response = await fetch(`${this.baseUrl}/posts`);
      const result: Api.User[] = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiService;
