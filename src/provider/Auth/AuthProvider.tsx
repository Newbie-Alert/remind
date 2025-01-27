import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";
import { ToastPopUp } from "../../module/Toast";

interface AuthProviderType {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthProviderType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  const signUp = async (email: string, password: string) => {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  };

  const login = async (email: string, password: string) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const logout = async () => {
    let { error } = await supabase.auth.signOut();
  };

  // 세션 상태 변경 시
  useEffect(() => {
    const session = supabase.auth.getSession().then((session) => {
      const userSession = session.data.session?.user;
      setUser(userSession || null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (e: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  if (!user)
    <React.Fragment>
      <div>회원가입 페이지</div>
    </React.Fragment>;

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// auth 훅
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    ToastPopUp({ type: "error", message: "유저 정보가 없습니다." });
  }

  return context;
};
