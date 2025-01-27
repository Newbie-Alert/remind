import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";
import { ToastPopUp } from "../../module/Toast";
import AuthPage from "../../components/authPage";

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
    try {
      let { data } = await supabase.auth.signUp({
        email,
        password,
      });
      ToastPopUp({
        type: "success",
        message: "회원가입 성공",
      });
    } catch (error) {
      ToastPopUp({
        type: "error",
        message: "회원가입 실패",
      });
    }
  };

  const login = async (email: string, password: string) => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      ToastPopUp({
        type: "success",
        message: "로그인 성공",
      });
    } catch (error) {
      ToastPopUp({
        type: "error",
        message: "로그인 실패",
      });
    }
  };

  const logout = async () => {
    try {
      let { error } = await supabase.auth.signOut();
      ToastPopUp({
        type: "success",
        message: "로그아웃 되었어요",
      });
    } catch (error) {
      ToastPopUp({
        type: "error",
        message: "로그아웃 실패",
      });
    }
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

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {user ? children : <AuthPage />}
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
