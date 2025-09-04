const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 5,
  handler: (req, res ) => { 
    return res.status(429).json({
      error: `Rate limit exceeded. Try again in 1 seconds.`,
    });
  },
});

module.exports = limiter;
