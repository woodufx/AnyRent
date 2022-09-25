"use strict";
module.exports = {
    swaggerDefinition: {
        info: {
            title: "Swagger Documentation",
            description: "This is a sample server",
            version: "1.0.0",
        },
        host: "localhost:8080",
        basePath: "/",
        produces: ["application/json", "application/xml"],
        schemes: ["https"],
        securityDefinitions: {
            JWT: {
                type: "apiKey",
                in: "header",
                name: "Authorization",
                description: "",
            },
        },
    },
    basedir: __dirname, //app absolute path
    files: ["../routes/*.js"], //Path to the API handle folder
};

//files: ["../app/routes/*.js"] //Path to the API handle folder
