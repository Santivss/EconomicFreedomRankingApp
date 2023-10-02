import { Router } from "express";

const router = Router();

router.get("activeApi", (req, res) => {
  res.json({
    message: "Active",
  });
});

export default router;
