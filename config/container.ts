import DataLoader from "dataloader";
import { Container, decorate, injectable, unmanaged, inject } from "inversify";
import {
    AuthApi
} from "../infrastructure";
import {
    IAuthApi,
    AuthApiType
} from "../core";

// We have to decorate the base DataLoader from the dataloader lib
decorate(injectable(), DataLoader);
decorate(unmanaged(), DataLoader, 0);
decorate(unmanaged(), DataLoader, 1);

// DI container, register everything in request scope for context
const container = new Container();
container.bind<IAuthApi>(AuthApiType).to(AuthApi).inRequestScope();
export default container;