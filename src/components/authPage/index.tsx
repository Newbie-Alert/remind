import React, { useState } from "react";
import * as Style from "./style";
import { useAuth } from "../../provider/Auth/AuthProvider";

type UserInfo = {
  name: string;
  email: string;
  password: string;
};

export default function AuthPage() {
  const auth = useAuth();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    password: "",
  });

  const handleUserInfo = (type: keyof UserInfo, value: string) => {
    setUserInfo((prev) => ({ ...prev, [type]: value }));
  };

  const handleSignup = () => {
    const { email, password } = userInfo;
    auth?.signUp(email, password);
  };

  return (
    <Style.Wrapper>
      <Style.FormContainer>
        <Style.FormTitle>회원가입</Style.FormTitle>
        <Style.Form>
          <Style.FormColBox>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                handleUserInfo("name", value);
              }}
            />
          </Style.FormColBox>
          <Style.FormColBox>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                handleUserInfo("email", value);
              }}
            />
          </Style.FormColBox>
          <Style.FormColBox>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                handleUserInfo("password", value);
              }}
            />
          </Style.FormColBox>

          <Style.FormColBox>
            <Style.Button $bgColor="black" onClick={handleSignup}>
              회원가입
            </Style.Button>
            <Style.Button>로그인</Style.Button>
          </Style.FormColBox>
        </Style.Form>
      </Style.FormContainer>
    </Style.Wrapper>
  );
}
