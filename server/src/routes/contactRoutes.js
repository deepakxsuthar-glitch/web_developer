import express from 'express';
import { body, validationResult } from 'express-validator';
import { submitContact, getContacts, deleteContact } from '../controllers/contactController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

const contactValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number or WhatsApp is required')
    .isLength({ min: 7, max: 20 })
    .withMessage('Please enter a valid phone number'),
  body('selectedPackage')
    .trim()
    .notEmpty()
    .withMessage('Please select a package or custom quote'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Please write a short message describing your project')
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters long'),
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    });
  }
  next();
};

router.post('/', contactValidationRules, validateRequest, submitContact);
router.get('/', protectAdmin, getContacts);
router.delete('/:id', protectAdmin, deleteContact);

export default router;
