import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (id) => {
  let token = jwt.sign({id}, JWT_SECRET, {
    expiresIn: "7d",
  });

  return token;
};

export default generateToken