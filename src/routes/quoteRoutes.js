const express = require("express");
const quotes = require("../data/quotes");
const limiter = require("../middlewares/rateLimiter");

const router = express.Router();

/**
 * @swagger
 * /api/quote:
 *   get:
 *     summary: Get a random inspirational quote
 *     description: Returns a random quote. Limited to 5 requests per minute per IP.
 *     responses:
 *       200:
 *         description: A random quote
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 quote:
 *                   type: string
 *                   example: "The only way to do great work is to love what you do. - Steve Jobs"
 *       429:
 *         description: Rate limit exceeded
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Rate limit exceeded. Try again in 60 seconds."
 */
router.get("/quote", limiter, (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

module.exports = router;
