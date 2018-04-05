import DataLoader from "dataloader";
import { Container, decorate, injectable, unmanaged, inject } from "inversify";
import {
    AuthApi,
    UserApi,
    PurchaseApi,
    ContextProvider,
} from "../infrastructure";
import {
    IAuthApi,
    AuthApiType,
    IUserApi,
    UserApiType,
    IPurchaseApi,
    PurchaseApiType,
    ContextProviderType,
    IContextProvider
} from "../core";

// We have to decorate the base DataLoader from the dataloader lib
decorate(injectable(), DataLoader);
decorate(unmanaged(), DataLoader, 0);
decorate(unmanaged(), DataLoader, 1);

// DI container, register everything in request scope for context
const container = new Container();
container.bind<IAuthApi>(AuthApiType).to(AuthApi).inRequestScope();
container.bind<IUserApi>(UserApiType).to(UserApi).inRequestScope();
container.bind<IPurchaseApi>(PurchaseApiType).to(PurchaseApi).inRequestScope();
container.bind<IContextProvider>(ContextProviderType).to(ContextProvider).inRequestScope();
export default container;