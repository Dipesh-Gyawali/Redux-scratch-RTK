declare namespace Api {
  interface User {
    id: number;
    title: string;
    body: string;
  }
  type ShowUserPayload = User[];
}
