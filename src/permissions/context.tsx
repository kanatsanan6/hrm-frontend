import { Fragment, ReactNode, createContext, useEffect, useState } from "react";

import { useAbility as useAbilityFn } from "@casl/react";
import { createMongoAbility } from "@casl/ability";
import { Abilities, AppAbility } from "./types";
import { useMe } from "@/services/me";
import { useAuthContext } from "@/features/auth/context/authContext";
import { isEmpty } from "lodash";
import { Loading } from "@/components";

type ProviderProps = {
  children: ReactNode;
};

const ability = createMongoAbility<Abilities>();

export const AbilityContext = createContext<AppAbility>(
  null as unknown as AppAbility
);

export const useAbility = () => useAbilityFn(AbilityContext);

export const PremissionContextProvider = (props: ProviderProps) => {
  const { data } = useMe();
  const { isAuthenticated } = useAuthContext();
  const [isUpdatedPolicy, setIsUpdatedPolicy] = useState(false);

  useEffect(() => {
    if (data) {
      const policies = data.policy || [];

      if (!isEmpty(policies)) {
        ability.update(policies);
      }

      setIsUpdatedPolicy(true);
    }
  }, [data?.policy]);

  return (
    <AbilityContext.Provider value={ability}>
      {isAuthenticated && !isUpdatedPolicy ? (
        <Loading />
      ) : (
        <Fragment>{props.children}</Fragment>
      )}
    </AbilityContext.Provider>
  );
};
