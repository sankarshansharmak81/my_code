import mongoose, { isValidObjectId } from "mongoose";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Video } from "../models/video.model.js";

const toggleVideoLike = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  const userId = req.user._id;

  if (!isValidObjectId(userId)) {
    throw new ApiError(404, "Invalid  User Id");
  }

  if (!isValidObjectId(videoId)) {
    throw new ApiError(404, "Invalid Id");
  }

  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(401, "No Video Found");
  }
  const likedIndex = video.likes.indexOf(userId);

  if (likedIndex === -1) {
    video.likes.push(userId);
    await video.save();
    return res.json(
      new ApiResponse(200, video.likes, "Video liked successfully")
    );
  } else {
    video.likes.splice(likedIndex, 1);
    await video.save();
    return res.json(
      new ApiResponse(200, video.likes, "Like removed from video")
    );
  }
});

const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  const userId = req.user._id;

  if (!isValidObjectId(commentId)) {
    throw new ApiError(400, "Invalid comment ID");
  }

  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new ApiError(404, "Comment not found");
  }

  const likeIndex = comment.likes.indexOf(userId);

  if (likeIndex === -1) {
    comment.likes.push(userId);
  } else {
    comment.likes.splice(likeIndex, 1);
  }

  await comment.save();

  return res.json(
    new ApiResponse(200, comment, "Comment like toggled successfully")
  );
});
const toggleTweetLike = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;

  if (!isValidObjectId(tweetId)) {
    throw new ApiError(400, "Invalid tweet ID");
  }

  const tweet = await Tweet.findById(tweetId);
  if (!tweet) {
    throw new ApiError(404, "Tweet not found");
  }

  const userId = req.user._id.toString();

  // Check if the user already liked the tweet
  const likeIndex = tweet.likes.indexOf(userId);

  if (likeIndex === -1) {
    // User has not liked it yet, so add the like
    tweet.likes.push(userId);
  } else {
    // User already liked it, so remove the like (toggle off)
    tweet.likes.splice(likeIndex, 1);
  }

  await tweet.save();

  return res.json(
    new ApiResponse(200, tweet, "Tweet like toggled successfully")
  );
});

const getLikedVideos = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  if (!isValidObjectId(userId)) {
    throw new ApiError(400, "Invalid user ID");
  }
  const likedVideos = await Video.find({ likes: userId }).populate(
    "owner",
    "username avatar",
  );

  return res.json(
    new ApiResponse(200, likedVideos, "Liked videos fetched successfully")
  );
});

export { toggleCommentLike, toggleTweetLike, toggleVideoLike, getLikedVideos };
777777