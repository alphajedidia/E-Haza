import { useContext } from "react";
import { IUserContextType } from "../types/user.context.type";
import { UserContext } from "../contexts/user.context";

export const useUserHook = ()=> useContext<IUserContextType>(UserContext)