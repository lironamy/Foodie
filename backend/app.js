"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_config_1 = require("./configs/database.config");
(0, database_config_1.dbConnect)();
const food_router_1 = __importDefault(require("./router/food.router"));
const user_router_1 = __importDefault(require("./router/user.router"));
const order_router_1 = __importDefault(require("./router/order.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/foods", food_router_1.default);
app.use("/api/users", user_router_1.default);
app.use("/api/orders", order_router_1.default);
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
