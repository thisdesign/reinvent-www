import { useContext } from "react";
import { AppCtx } from "pages/_app";

export const useGlobalData = () => useContext(AppCtx);
