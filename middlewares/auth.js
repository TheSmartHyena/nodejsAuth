const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        console.log("pouet pouet mdr");
        const token = req.headers.authorization.split(" ")[1];
        // should be in env var or in .gitignored file
        const result = await jwt.verify(token, "longer-secret-is-better");
        console.log(result);
        next();
    } catch (error) {
        res.status(401).json({ message: "Authentication failed!" });
    }
};
