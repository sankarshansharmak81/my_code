import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { Subscription } from "../models/subscription.model.js";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getChannelStats = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  if (!mongoose.isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid channel ID");
  }

  // Get total number of videos uploaded
  const totalVideos = await Video.countDocuments({ owner: channelId });

  // Get total likes across all videos
  const totalLikes = await Video.aggregate([
    { $match: { owner: new mongoose.Types.ObjectId(channelId) } },
    { $group: { _id: null, totalLikes: { $sum: { $size: "$likes" } } } },
  ]);

  // Get total views across all videos
  const totalViews = await Video.aggregate([
    { $match: { owner: new mongoose.Types.ObjectId(channelId) } },
    { $group: { _id: null, totalViews: { $sum: "$views" } } },
  ]);

  // Get total subscribers
  const totalSubscribers = await Subscription.countDocuments({ channel: channelId });

  return res.json(
    new ApiResponse(200, {
      totalVideos,
      totalLikes: totalLikes[0]?.totalLikes || 0,
      totalViews: totalViews[0]?.totalViews || 0,
      totalSubscribers,
    }, "Channel stats fetched successfully")
  );
});


const getChannelVideos = asyncHandler(async (req, res) => {
  const { channelId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  if (!mongoose.isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid channel ID");
  }

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  const videos = await Video.find({ owner: channelId })
    .sort({ createdAt: -1 }) // Sort by newest first
    .skip((pageNumber - 1) * limitNumber)
    .limit(limitNumber)
    .populate("owner", "username avatar"); // Populate channel details

  const totalVideos = await Video.countDocuments({ owner: channelId });

  return res.json(
    new ApiResponse(200, {
      videos,
      totalVideos,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalVideos / limitNumber),
    }, "Channel videos fetched successfully")
  );
});

export { getChannelStats, getChannelVideos };
