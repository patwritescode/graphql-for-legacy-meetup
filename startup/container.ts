import DataLoader from "dataloader";
import { Container, decorate, injectable, unmanaged, inject } from "inversify";
import {
    CMSApi,
    ContextProvider,
    WebApi,
    ProductService,
    ProductDetailLoader,
    ProductInventoryLoader,
    ProductReviewsLoader,
    UserLoader,
    UserService
} from "../infrastructure";
import {
    ICMSApi,
    ICMSApiType,
    IWebApi,
    IWebApiType,
    IContextProviderType,
    IContextProvider,
    IProductService,
    IProductServiceType,
    IProductInventoryLoaderType,
    IProductInventoryLoader,
    IProductDetailLoaderType,
    IProductDetailLoader,
    IProductReviewsLoaderType,
    IProductReviewsLoader,
    IUserLoader,
    IUserLoaderType,
    IUserService,
    IUserServiceType
} from "../core";

// We have to decorate the base DataLoader from the dataloader lib
decorate(injectable(), DataLoader);
decorate(unmanaged(), DataLoader, 0);
decorate(unmanaged(), DataLoader, 1);

// DI container, register everything in request scope for context
const container = new Container();

// APIs
container.bind<ICMSApi>(ICMSApiType).to(CMSApi).inRequestScope();
container.bind<IWebApi>(IWebApiType).to(WebApi).inRequestScope();

// Services
container.bind<IProductService>(IProductServiceType).to(ProductService).inRequestScope();
container.bind<IUserService>(IUserServiceType).to(UserService).inRequestScope();

// Loaders
container.bind<IProductInventoryLoader>(IProductInventoryLoaderType).to(ProductInventoryLoader).inRequestScope();
container.bind<IProductDetailLoader>(IProductDetailLoaderType).to(ProductDetailLoader).inRequestScope();
container.bind<IProductReviewsLoader>(IProductReviewsLoaderType).to(ProductReviewsLoader).inRequestScope();
container.bind<IUserLoader>(IUserLoaderType).to(UserLoader).inRequestScope();

// Providers
container.bind<IContextProvider>(IContextProviderType).to(ContextProvider).inRequestScope();
export default container;