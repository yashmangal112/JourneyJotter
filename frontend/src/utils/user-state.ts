class UserState {
  private static instance: UserState;
  private user: { _id: string; role: string; token: string } | null;

  private constructor() {
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('role');
    const userToken = localStorage.getItem('token');

    if (userId && userRole && userToken) {
      this.user = { _id: userId, role: userRole, token: userToken };
    } else {
      this.user = null;
    }
  }

  static getInstance(): UserState {
    if (!UserState.instance) {
      UserState.instance = new UserState();
    }
    return UserState.instance;
  }

  setUser(user: { _id: string; role: string; token: string } | null): void {
    this.user = user;
    if (user) {
      localStorage.setItem('userId', user._id);
      localStorage.setItem('role', user.role);
      localStorage.setItem('token', user.token);
    } else {
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
      localStorage.removeItem('token');
    }
  }

  getUser(): { _id: string; role: string; token:string } | null {
    return this.user;
  }

  removeUser(): void {
    this.setUser(null);
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }
}

const userState = UserState.getInstance();
export default userState;
