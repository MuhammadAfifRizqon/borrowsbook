import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { createError } from "../utils/error";

// Registrasi
const registrasi = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password_members, salt);
    const createMembers = await req.context.models.members.create({
      code: req.body.code,
      name_members : req.body.name_members,
      isadmin: req.body.isadmin,
      password_members: hash,
    });
    return res.status(200).json({ message: "Registrasi Success" });
  } catch (error) {
    next(error);
  }
};

// Login
const login = async (req, res, next) => {
  try {
    const member = await req.context.models.members.findOne({
      where: { code: req.body.code },
    });
    if (!member) return next(createError(404, "User Not Found"));
    const isPassword = await bcrypt.compare(
      req.body.password_members,
      member.password_members
    );
    if (!isPassword)
      return next(createError(404, "Username Or Password Invalid"));
    const token = jwt.sign(
      {
        id: member.id_members,
        isadmin: member.isadmin,
      },
      process.env.JWT
    );
    const { password, isadmin, ...otherDetails } = member.dataValues;
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ data: { ...otherDetails }, message: "Login Success" });
  } catch (error) {
    next(error);
  }
};

export default {
  registrasi,
  login,
};