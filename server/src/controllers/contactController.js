import Contact from '../models/Contact.js';
import { sendContactEmails } from '../utils/mailer.js';
import { isConnectedToMongo } from '../config/db.js';

const inMemoryContacts = [];

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, selectedPackage, message } = req.body;

    const contactPayload = {
      name,
      email,
      phone,
      selectedPackage: selectedPackage || 'Business Website (₹9,000)',
      message,
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
      createdAt: new Date(),
    };

    let savedContact;
    if (isConnectedToMongo) {
      savedContact = await Contact.create(contactPayload);
    } else {
      savedContact = {
        _id: `contact-${Date.now()}`,
        ...contactPayload,
      };
      inMemoryContacts.unshift(savedContact);
    }

    // Trigger emails (admin alert + client auto-reply)
    let emailStatus = null;
    try {
      emailStatus = await sendContactEmails({
        name,
        email,
        phone,
        selectedPackage: contactPayload.selectedPackage,
        message,
      });
    } catch (mailError) {
      console.error('⚠️ Mail delivery error:', mailError.message);
      emailStatus = { success: false, error: mailError.message };
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been received. Deepak will reach out shortly.',
      data: savedContact,
      emailStatus,
    });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    if (isConnectedToMongo) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: contacts.length, data: contacts });
    }
    return res.status(200).json({ success: true, count: inMemoryContacts.length, data: inMemoryContacts });
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (isConnectedToMongo) {
      await Contact.findByIdAndDelete(id);
    } else {
      const idx = inMemoryContacts.findIndex(c => c._id === id);
      if (idx !== -1) inMemoryContacts.splice(idx, 1);
    }
    return res.status(200).json({ success: true, message: 'Inquiry removed successfully' });
  } catch (error) {
    next(error);
  }
};
