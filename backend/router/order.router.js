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
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const http_status_1 = require("../constants/http_status");
const order_status_1 = require("../constants/order_status");
const order_model_1 = require("../models/order.model");
const auth_mid_1 = __importDefault(require("../middlewares/auth.mid"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = (0, express_1.Router)();
router.use(auth_mid_1.default);
router.post('/create', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOrder = req.body;
    if (requestOrder.items.length <= 0) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }
    yield order_model_1.OrderModel.deleteOne({
        user: req.user.id,
        status: order_status_1.OrderStatus.NEW
    });
    const newOrder = new order_model_1.OrderModel(Object.assign(Object.assign({}, requestOrder), { user: req.user.id }));
    yield newOrder.save();
    res.send(newOrder);
})));
router.get('/newOrderForCurrentUser', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield getNewOrderForCurrentUser(req);
    if (order)
        res.send(order);
    else
        res.status(http_status_1.HTTP_BAD_REQUEST).send();
})));
router.post('/pay', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentId } = req.body;
    const order = yield getNewOrderForCurrentUser(req);
    if (!order) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Order Not Found!');
        return;
    }
    order.paymentId = paymentId;
    order.status = order_status_1.OrderStatus.PAYED;
    yield order.save();
    res.send(order._id);
})));
router.get('/track/:id', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(orderId)) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Invalid Order ID');
        return;
    }
    const order = yield order_model_1.OrderModel.findById(orderId);
    if (!order) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Order Not Found');
        return;
    }
    res.send(order);
})));
function getNewOrderForCurrentUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield order_model_1.OrderModel.findOne({ user: req.user.id, status: order_status_1.OrderStatus.NEW });
    });
}
router.get('/myOrders', (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(userId)) {
        res.status(http_status_1.HTTP_BAD_REQUEST).send('Invalid User ID');
        return;
    }
    const orders = yield order_model_1.OrderModel.find({ user: userId });
    console.log('Fetched orders:', orders); // Debugging line
    const formattedOrders = [];
    for (const order of orders) {
        const formattedOrder = {
            id: '',
            date: new Date(),
            status: order_status_1.OrderStatus.NEW,
            paymentId: '',
            items: [],
            totalPrice: 0,
        };
        for (const item of order.items) {
            const formattedItem = {
                name: item.food.name,
                price: item.price,
                quantity: item.quantity,
                imageUrl: item.food.imageUrl,
                totalPrice: item.price * item.quantity,
            };
            formattedOrder.items.push(formattedItem);
            formattedOrder.totalPrice += formattedItem.totalPrice;
        }
        formattedOrders.push(formattedOrder);
    }
    console.log('Formatted orders:', JSON.stringify(formattedOrders, null, 2));
    res.send(JSON.stringify(formattedOrders, null, 2));
})));
exports.default = router;
