import React, { FC, useState } from "react";

import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { ScreenContainer } from "@app/core/components/ScreenContainer";
import { ProportionalSpacer as ProportionalSpacer } from "@app/core/components/ProportionalSpacer";
import { ErrorMessage } from "@app/core/components/ErrorMessage";
import { SecondaryButton } from "@app/core/components/SecondaryButton";
import { PrimaryButton } from "@app/core/components/PrimaryButton";
import { H1 } from "@app/core/components/Text";

export type LoginScreenViewProps = {
  lastEmail: string;
  startLogin: (args: { email: string; password: string }) => void;
  switchToSignup: () => void;
  isActive: boolean;
  error?: Error;
};

export const LoginScreenView: FC<LoginScreenViewProps> = ({
  lastEmail,
  startLogin,
  switchToSignup,
  isActive,
  error,
}) => {
  const [email, setEmail] = useState(lastEmail);
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    startLogin({ email, password });
  };

  return (
    <ScreenContainer>
      <ProportionalSpacer ratioOfFreeSpaceAtTop={0.5}>
        <H1 className="mb-8">Existing user</H1>
        {error && <ErrorMessage className="mb-1">{error.message}</ErrorMessage>}
        <EmailInput value={email} onChangeText={setEmail} />
        <PasswordInput value={password} onChangeText={setPassword} />
        <SecondaryButton
          className="mt-4"
          onPress={switchToSignup}
          title="Not registered yet?"
        />
        <PrimaryButton
          className="mt-4"
          onPress={handleLoginPress}
          title="Login"
          isInProgress={isActive}
        />
      </ProportionalSpacer>
    </ScreenContainer>
  );
};
