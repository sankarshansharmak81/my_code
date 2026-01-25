import mongoose, { isValidObjectId } from "mongoose";
import { User } from "../models/user.model.js";
import { Subscription } from "../models/subscription.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { subscribe } from "diagnostics_channel";

const toggleSubscription = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  if (!isValidObjectId(channelId)) {
    throw new ApiError(401, "Invalid Id");
  }

  const userId = req.user.id;
  if (!isValidObjectId(userId)) {
    throw new ApiError(401, "user not found");
  }

  const channel = await User.findById(channelId);
  if (channel == null) {
    throw new ApiError(402, "channel not found");
  }

  const subscription = await Subscription.findOne({
    subscriber: userId,
    channel: channelId,
  });

  if (subscription) {
    await Subscription.remove();
    return res.json(new ApiResponse(200, null, "Unsubscribed successfully"));
  }

  await Subscription.create({ subscriber: userId, channel: channelId });
  return res.json(new ApiResponse(200, null, "Subscribed successfully"));
});

// controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
  const { channelId } = req.params;
  if (!isValidObjectId(channelId)) {
    throw new ApiError(401, "Invalid Id");
  }

  const channel = await User.findById(channelId);
  if (channel == null) {
    throw new ApiError(402, "channel not found");
  }

  const subscription = await Subscription.find({ channel: channelId }).populate(
    "subscriber",
    "name email"
  );

  const subscribers = subscription.map((sub) => sub.subscriber);

  return res.json(
    new ApiResponse(200, subscribers, "Subscribers fetched successfully")
  );
});

// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
  const { subscriberId } = req.params;

  if (!isValidObjectId(subscriberId)) {
    throw new ApiError(400, "Subscriber Not Found");
  }

  const subscriber = await User.findById(subscriberId);

  if (subscriber == null) {
    throw new ApiError(404, "Subscriber not found");
  }

  const subscription = await Subscription.find({
    subscriber: subscriberId,
  }).populate("channel", "name email");

  const subscribedChannels = subscription.map((sub) => sub.channel);

  return res.json(
    new ApiResponse(
      200,
      subscribedChannels,
      "Subscribed channels fetched successfully"
    )
  );
});

export { toggleSubscription, getUserChannelSubscribers, getSubscribedChannels };
