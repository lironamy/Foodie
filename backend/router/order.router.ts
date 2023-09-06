import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import { OrderStatus } from '../constants/order_status';
import { OrderItem, OrderModel } from '../models/order.model';
import auth from '../middlewares/auth.mid';
import mongoose from 'mongoose';

const router = Router();
router.use(auth);

router.post('/create',
asyncHandler(async (req:any, res:any) => {
    const requestOrder = req.body;

    if(requestOrder.items.length <= 0){
        res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW
    });

    const newOrder = new OrderModel({...requestOrder,user: req.user.id});
    await newOrder.save();
    res.send(newOrder);
})
)


router.get('/newOrderForCurrentUser', asyncHandler( async (req:any,res ) => {
    const order= await getNewOrderForCurrentUser(req);
    if(order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}))

router.post('/pay', asyncHandler( async (req:any, res) => {
    const {paymentId} = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(HTTP_BAD_REQUEST).send('Order Not Found!');
        return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();

    res.send(order._id);
}))

router.get('/track/:id', asyncHandler(async (req, res) => {
    const orderId = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      res.status(HTTP_BAD_REQUEST).send('Invalid Order ID');
      return;
    }
  
    const order = await OrderModel.findById(orderId);
    
    if (!order) {
      res.status(HTTP_BAD_REQUEST).send('Order Not Found');
      return;
    }
  
    res.send(order);
  }));
  

async function getNewOrderForCurrentUser(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}

router.get('/myOrders', asyncHandler(async (req: any, res: any) => {
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(HTTP_BAD_REQUEST).send('Invalid User ID');
        return;
    }

    const orders = await OrderModel.find({ user: userId });
    console.log('Fetched orders:', orders); // Debugging line

    const formattedOrders: {
        id: string;
        date: Date;
        status: OrderStatus;
        paymentId: string;
        items: {
            name: string;
            price: number;
            quantity: number;
            imageUrl: string;
            totalPrice: number;
        }[];
        totalPrice: number;
    }[] = [];
    
    for (const order of orders) {
        const formattedOrder: {
            id: string;
            date: Date;
            status: OrderStatus;
            paymentId: string;
            items: {
                name: string;
                price: number;
                quantity: number;
                imageUrl: string;
                totalPrice: number;
            }[];
            totalPrice: number;
        } = {
            id: '', 
            date: new Date(), 
            status: OrderStatus.NEW, 
            paymentId: '', 
            items: [], 
            totalPrice: 0, 
        };
        

        for (const item of order.items as OrderItem[]) {
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
}))






export default router;
