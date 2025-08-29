// import express from 'express';
// import { addProduct, listProducts, removeProduct, singleProduct } from '../controllers/productController.js';
// import upload from '../middleware/multer.js';
// import adminAuth from '../middleware/adminAuth.js';

// const productRouter = express.Router();

// productRouter.post('/add',upload.fields([{name:'image1', maxCount:1}, {name:'image2', maxCount:1}, {name:'image3', maxCount:1}, {name:'image4', maxCount:1}]),adminAuth, addProduct); 
// productRouter.get('/list',adminAuth, listProducts);
// productRouter.post('/remove', removeProduct);
// productRouter.post('/single', singleProduct);    


// export default productRouter;


import express from 'express';
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct
} from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';
import multer from 'multer';

const productRouter = express.Router();
// secure adding product route with adminAuth middleware
productRouter.post(
  "/add",
  upload.array("images", 4),
   adminAuth,
   addProduct
);


// secure listing as well
productRouter.get('/list', adminAuth, listProducts);

// probably should also require admin auth for remove/single
productRouter.post('/remove', adminAuth, removeProduct);
productRouter.post('/single', adminAuth, singleProduct);

export default productRouter;
