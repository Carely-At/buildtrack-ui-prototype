import { createContext, useContext, useState, useCallback } from 'react';
import { mockUsers, ROLES } from '../data/mock';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('buildtrack-user');
      if (stored) {
        try { return JSON.parse(stored); } catch { return null; }
      }
    }
    return null;
  });

  const login = useCallback((email, _password) => {
    const found = mockUsers.find(u => u.email === email);
    if (found) {
      setUser(found);
      localStorage.setItem('buildtrack-user', JSON.stringify(found));
      return { success: true, user: found };
    }
    return { success: false, error: 'Email ou mot de passe incorrect.' };
  }, []);

  const loginAs = useCallback((role) => {
    const found = mockUsers.find(u => u.role === role);
    if (found) {
      setUser(found);
      localStorage.setItem('buildtrack-user', JSON.stringify(found));
      return { success: true, user: found };
    }
    return { success: false };
  }, []);

  const register = useCallback((name, email, _password, role) => {
    const newUser = {
      id: String(Date.now()),
      name,
      email,
      role: role || ROLES.USER,
      avatar: null,
      joinedAt: new Date().toISOString().slice(0, 10),
    };
    setUser(newUser);
    localStorage.setItem('buildtrack-user', JSON.stringify(newUser));
    return { success: true, user: newUser };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('buildtrack-user');
  }, []);

  const switchRole = useCallback((role) => {
    const found = mockUsers.find(u => u.role === role);
    if (found) {
      setUser(found);
      localStorage.setItem('buildtrack-user', JSON.stringify(found));
    }
  }, []);

  const isAdmin = user?.role === ROLES.ADMIN;
  const isOwner = user?.role === ROLES.OWNER;
  const isUser = !isAdmin && !isOwner;

  return (
    <AuthContext.Provider value={{
      user,
      login,
      loginAs,
      register,
      logout,
      switchRole,
      isAuthenticated: !!user,
      isAdmin,
      isOwner,
      isUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}