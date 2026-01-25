import { Router } from "express";
import {
  deleteVideo,
  getAllVideos,
  getVideoById,
  publishAVideo,
  togglePublishStatus,
  updateVideo,
} from "../controllers/video.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/mutler.middleware.js";

const router = Router();

// Middleware to verify JWT for all video routes
router.use(verifyJWT);

router
  .route("/")
  .get(getAllVideos) // Get all videos
  .post(
    upload.fields([
      { name: "videoFile", maxCount: 1 },
      { name: "thumbnail", maxCount: 1 },
    ]),
    publishAVideo
  ); // Publish a video

router
  .route("/:videoId")
  .get(getVideoById) // Get video by ID
  .delete(deleteVideo) // Delete video
  .patch(upload.single("thumbnail"), updateVideo); // Update video

router.route("/toggle/publish/:videoId").patch(togglePublishStatus); // Toggle publish status

export default router;
