import mongoose, { isValidObjectId, Query } from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Video } from "../models/video.model.js";

const getVideoComments = asyncHandler(async (req, res) => {
  //TODO: get all comments for a video
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(404, "Invalid Id");
  }

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  const comments = await Comment.find({ video: videoId })
    .populate("user", " username", "avatar")
    .sort({ createdAt: -1 })
    .skip((pageNumber - 1) * limitNumber)
    .limit(limitNumber);

  const totalComments = await Comment.countDocuments({ video: videoId });

  return res.json(
    new ApiResponse(
      200,
      {
        comments,
        totalComments,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalComments / limitNumber),
      },
      "Comments fetch succesfully"
    )
  );
});

const addComment = asyncHandler(async (req, res) => {
  const {videoId} = req.params
  const {text} = req.body

  if (!isValidObjectId(videoId)) {
    throw new ApiError(404, "Invalid id")
  }
  if (!text|| text.trim() === "") {
    throw new ApiError(401, "Text is empty")
  }

  const userid =await req.user._id
  if (!userid) {
    throw new ApiError(400, "User not logged in")
    
  }

  const video = await Video.findById(videoId)
  if (!video) {
    throw new ApiError(404, "No video found")
  }
  
  const newComment = await Comment.create({
    video: videoId,
    user: userid,
    text

  })

  return res.json(new ApiResponse(200, newComment, "Comment added successfully"));
    


});


const updateComment = asyncHandler(async (req, res) => {
  const {commentId} = req.params
  const {text} = req.body
  
  if (!isValidObjectId(commentId)) {
    throw new ApiError(404, "Invalid id")
  }
  if (!text|| text.trim() === "") {
    throw new ApiError(401, "Text is empty")
  }

  const comment = await Comment.findById(commentId)
  if(!comment){
    throw new ApiError(404, "Comment not found")
  }

  if (comment.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Unauthorized to update this comment");
  }

  comment.text = text
  await comment.save()

  return res.json(new ApiResponse(200, comment, "Comment updated successfully"));

});

const deleteComment = asyncHandler(async (req, res) => {
  const {commentId} = req.params
  
  
  if (!isValidObjectId(commentId)) {
    throw new ApiError(404, "Invalid id")
  }

  const comment = await Comment.findById(commentId)
  if(!comment){
    throw new ApiError(404, "Comment not found")
  }

  if (comment.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Unauthorized to update this comment");
  }

  await comment.deleteOne()

  return res.json(new ApiResponse(200, null, "Comment deleted successfully"));


});

export { getVideoComments, addComment, updateComment, deleteComment };
