// require("dotenv").config();

const Fastify = require("fastify");
const fs = require("fs-extra");
const path = require("path");

const DEFAULT_BODY_LIMIT_MB = 50;

function readBodyLimitBytes() {
    const configured = Number(process.env.REQUEST_BODY_LIMIT_MB);
    const mb = Number.isFinite(configured) && configured > 0 ? configured : DEFAULT_BODY_LIMIT_MB;
    return Math.floor(mb * 1024 * 1024);
}

const app = Fastify({
    logger: true,
    bodyLimit: readBodyLimitBytes()
});

app.register(require("@fastify/formbody"));

const PORT = Number(process.env.PORT) || 3000;
const TARGET_API_URL = process.env.TARGET_API_URL;
