import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { isConnectedToMongo } from '../config/db.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    const { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } = process.env;
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !JWT_SECRET) {
      return res.status(503).json({ success: false, message: 'Admin authentication is not configured' });
    }

    let userValid = false;

    if (isConnectedToMongo) {
      const user = await User.findOne({ email });
      if (user && (await user.comparePassword(password))) {
        userValid = true;
      }
    } else {
      // Local fallback auth
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        userValid = true;
      }
    }

    if (!userValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { email, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        email,
        name: 'Deepak',
        role: 'admin'
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user
  });
};
