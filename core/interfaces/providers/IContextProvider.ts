import { IAuthService } from "../services";

export const ContextProviderType = Symbol.for("IContextProvider");
export interface IContextProvider {
    authService: IAuthService;
}