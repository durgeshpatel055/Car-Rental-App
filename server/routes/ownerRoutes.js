import express from "express"
import { protect } from "../middleware/auth.js";
import { changeRolrToOwner } from "../controllers/ownerController.js";

const ownerRouter = express.Router();

ownerRouter.post('/change-role', protect, changeRolrToOwner)






export default ownerRouter

