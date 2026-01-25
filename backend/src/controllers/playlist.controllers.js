import mongoose, { isValidObjectId } from "mongoose";
import { Playlist } from "../models/playlist.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    throw new ApiError(401, "Name does not exist");
  }

  const user = req.user._id;
  if (!user) {
    throw new ApiError("No User available");
  }

  const exisitingplaylist = await Playlist.findOne({ name, owner: user });
  if (exisitingplaylist) {
    throw new ApiError(401, "PLaylist already exist");
  }
  const newPlaylist = await Playlist.create({ name, description, owner: user });

  return res.json(new ApiResponse(200, newPlaylist, "Playist created"));
});

const getUserPlaylists = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!isValidObjectId(userId)) {
    throw new ApiError(400, "Invalid user ID");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const userPlaylists = await Playlist.find({ owner: userId }).populate(
    "videos"
  );

  return res.json(
    new ApiResponse(
      200,
      userPlaylists,
      userPlaylists.length > 0
        ? "Playlists fetched successfully"
        : "No playlists exist"
    )
  );
});

const getPlaylistById = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, " Invalid Playlist ID");
  }

  const playlist = await Playlist.findById(playlistId).populate("videos");
  if (!playlist) {
    throw new ApiError(404, "Playlist Not found");
  }

  return res.json(
    new ApiResponse(200, playist, "Playlist fetched successfully")
  );
});

const addVideoToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!isValidObjectId(playlistId) || !isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid id");
  }

  const playlist = await Playlist.findById(playlistId);
  if (!playlist) {
    throw new ApiError(404, "Playlist Not found");
  }

  if (playlist.videos.includes(videoId)) {
    throw new ApiError(400, " Video already exist");
  }

  playlist.videos.push(videoId);
  await playlist.save();

  return res.json(
    new ApiResponse(200, playlist, "Video added to playlist successfully")
  );
});

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!isValidObjectId(playlistId) || !isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid id");
  }

  const playlist = await Playlist.findById(playlistId);
  if (!playlist) {
    throw new ApiError(404, "Playlist Not found");
  }

  playlist.videos.pull(videoId);
  await playlist.save();

  return res.json(
    new ApiResponse(
      200,
      playlist,
      " Video removed from playlist successfully  "
    )
  );
});

const deletePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, "Invalid id");
  }

  const playlist = await Playlist.findById(playlistId);
  if (!playlist) {
    throw new ApiError(400, "No playist found");
  }

  await Playlist.findByIdAndDelete(playlistId);

  return res.json(new ApiResponse(200, null, " PlayList deleted  "));
});

const updatePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const { name, description } = req.body;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, "Invalid id");
  }

  if (!name && !description) {
    throw new ApiError(401, "no such name exist");
  }

  const playlist = await Playlist.findById(playlistId);
  if (!playlist) {
    throw new ApiError(404, "No playlist found");
  }

  if (name) {
    playlist.name = name;
  }

  if (description) {
    playlist.description = description;
  }

  await playlist.save();

  return res.json(
    new ApiResponse(200, playlist, "Playlist updated successfully")
  );
});

export {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  deletePlaylist,
  updatePlaylist,
};
