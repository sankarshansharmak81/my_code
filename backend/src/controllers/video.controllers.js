import mongoose, { isValidObjectId } from "mongoose";
import { Video } from "../models/video.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {upload} from "../middlewares/mutler.middleware.js";

const getAllVideos = asyncHandler(async (req, res) => {
  let { page, limit, query, sortBy, sortType, userId } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    sortBy = sortBy || "createdAt";
    sortType = sortType === "asc" ? 1 : -1;

    let filter = {};

    if (query) {
        filter.$or = [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } }
        ];
    }

    if (userId) {
        filter.owner = userId;
    }

    const videos = await Video.find(filter)
        .sort({ [sortBy]: sortType })
        .skip((page - 1) * limit)
        .limit(limit);

    const totalVideos = await Video.countDocuments(filter);
    const totalPages = Math.ceil(totalVideos / limit);

    if (videos.length === 0) {
        throw new ApiError(404, "No videos found");
    }

   return res.status(200).json({
        success: true,
        videos,
        totalVideos,
        totalPages,
        currentPage: page
    });

  
});

const publishAVideo = asyncHandler(async (req, res) => {

 

  const { title, description } = req.body;

  if (!title || !description || !req.files?.videoFile || !req.files?.thumbnail) {
    throw new ApiError(400, "All fields are required");
  }

  // Correctly access temp file paths
  const videoLocalPath = req.files?.videoFile[0]?.path;
  const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
  

  if (!videoLocalPath || !thumbnailLocalPath) {
    throw new ApiError(400, "No video or thumbnail found");
  }

  const videoUrl = await uploadOnCloudinary(videoLocalPath);
  if (!videoUrl) {
    throw new ApiError(500, "Video upload to Cloudinary failed");
  }

  const thumbnailUrl = await uploadOnCloudinary(thumbnailLocalPath);
  if (!thumbnailUrl) {
    throw new ApiError(500, "Thumbnail upload to Cloudinary failed");
  }

  const video = await Video.create({
    title,
    description,
    videoFile: videoUrl.url,
    thumbnail: thumbnailUrl.url,
    duration: 0,
    views: 0,
    isPublished: true,
    owner: req.user.id,
  });

  return res.status(201).json(new ApiResponse(201, video, "Video published successfully"));
});


const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  if (!videoId) {
    throw new ApiError(400, "No video find");
  }

  const video = await Video.findById(videoId);

  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, videoId, "Video fetched successfully"));
});

const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const {title, description} = req.body

  if (!videoId) {
    throw new ApiError(400, "video Id is invalid");
  }

  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(400, "video not found");
  }

  let thumbnailUrl = video.thumbnail;
  if (req.files?.thumbnail) {
    const thumbnailLocalPath = req.files.thumbnail.tempFilePath;
    const upload = await uploadOnCloudinary(thumbnailLocalPath);

    if (!upload) {
      throw new ApiError(500, "Thumbnail upload to Cloudinary failed");
    }

    thumbnailUrl = upload;
  }

  video.title = title || video.title;
  video.description = description || video.description;
  video.thumbnail = thumbnailUrl;

  video.save();

  return res
    .status(200)
    .json(new ApiResponse(200, video, "Video updated successfully"));
});

const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  if (!videoId) {
    throw new ApiError(400, "video Id is invalid");
  }

  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  await Video.findByIdAndDelete(videoId);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Video deleted successfully"));
});

const togglePublishStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!videoId) {
    throw new ApiError(400, "Video ID is required");
  }

  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  video.isPublished = !video.isPublished;
  await video.save();

  res
    .status(200)
    .json(
      new ApiResponse(200, video, "Video publish status updated successfully")
    );
});

export {
  getAllVideos,
  publishAVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
};
