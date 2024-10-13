import jwt from 'jsonwebtoken'

const verifyToken = async (res, req) => {
    const userID =  await jwt.decode(req.cookies.jwt, process.env.JWT_SECRET)
    console.log(userID)
}

export default verifyToken 