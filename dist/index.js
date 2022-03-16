"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("./graphql");
const config_1 = require("./config");
/**
 * Create an express server and apply the Apollo Server middleware
 */
const app = (0, express_1.default)();
/**
 * Create an Apollo server instance.
 */
const server = new apollo_server_express_1.ApolloServer({ typeDefs: graphql_1.typeDefs, resolvers: graphql_1.resolvers });
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield server.start();
        server.applyMiddleware({ app });
    });
}
startServer();
app.get("/", (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});
app.listen({ port: config_1.PORT }, () => {
    console.log(`Server is running at http://localhost:${config_1.PORT}${server.graphqlPath}`);
});
//# sourceMappingURL=index.js.map