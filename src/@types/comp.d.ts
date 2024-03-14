declare namespace Comp {
  interface Login {
    id: number;
    name: string;
    // role: string;
  }

  interface AuthState {
    isAuthenticated: boolean;
    user: Login | null;
  }

  interface PaginationState {
    page: number;
    perPageData: number;
  }
}
