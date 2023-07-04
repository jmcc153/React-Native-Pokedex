import { useState, createContext } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}