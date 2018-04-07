import DataLoader from "dataloader";
import { Container, decorate, injectable, unmanaged, inject } from "inversify";
import { CMSApi, ContextProvider, OrderApi, WebApi, ProductService, ProductDetailLoader } from "../infrastructure";
import {
    ICMSApi,
    ICMSApiType,
    IOrderApi,
    IOrderApiType,
    IWebApi,
    IWebApiType,
    IContextProviderType,
    IContextProvider,
    IProductService,
    IProductServiceType,
    IProductInventoryLoaderType,
    IProductInventoryLoader,
    IProductDetailLoaderType,
    IProductDetailLoader
} from "../core";
import ProductInventoryLoader from "../infrastructure/loaders/ProductInventoryLoader";

// We have to decorate the base DataLoader from the dataloader lib
decorate(injectable(), DataLoader);
decorate(unmanaged(), DataLoader, 0);
decorate(unmanaged(), DataLoader, 1);

// DI container, register everything in request scope for context
const container = new Container();
// APIs
container.bind<ICMSApi>(ICMSApiType).to(CMSApi).inRequestScope();
container.bind<IOrderApi>(IOrderApiType).to(OrderApi).inRequestScope();
container.bind<IWebApi>(IWebApiType).to(WebApi).inRequestScope();
// Services
container.bind<IProductService>(IProductServiceType).to(ProductService).inRequestScope();
// Loaders
container.bind<IProductInventoryLoader>(IProductInventoryLoaderType).to(ProductInventoryLoader).inRequestScope();
container.bind<IProductDetailLoader>(IProductDetailLoaderType).to(ProductDetailLoader).inRequestScope();
// Providers
container.bind<IContextProvider>(IContextProviderType).to(ContextProvider).inRequestScope();
export default container;