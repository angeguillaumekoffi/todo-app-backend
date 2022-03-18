export const PORT = 4000;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: "mongodb://localhost:27017/todolist_api",
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: "mongodb://mongo:27017/todolist_api",
    },
};