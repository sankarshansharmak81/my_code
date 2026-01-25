import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { toggleSubscription, getSubscribedChannels, getUserChannelSubscribers } from "../controllers/subscrition.controllers.js";


const router = Router();

router.post("/:channelId/toggle", verifyJWT, toggleSubscription);

// Get subscribers of a channel
router.get("/:channelId/subscribers", getUserChannelSubscribers);

// Get all channels a user is subscribed to
router.get("/:subscriberId/subscriptions", getSubscribedChannels);

export default router;