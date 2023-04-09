import { FC } from "react";
import { LoginScreenView } from "./LoginScreenView";
import { useAuthStoreActions } from "../store/authStore";

export const LoginScreen: FC = () => {
  const authStoreActions = useAuthStoreActions();

  return (
    <LoginScreenView
      lastEmail="lastEmail@test.com"
      isActive={false}
      error={undefined}
      onLoginPress={({ email, password }) =>
        authStoreActions.login(email, password)
      }
      onSwitchToSignup={() => {}}
    />
  );
};
