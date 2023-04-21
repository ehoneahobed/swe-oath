// pages/api/sign-oath.js
import connectDB from "../utils/connectdb";
import Oath from "../models/signOath";

connectDB();

export const createSignature = async (req, res) => {
  const { fullName, email, country } = req.body;
  try {
    const signature = new Oath({ fullName, email, country });
    await signature.save();
    console.log(`New signature created: ${signature}`);
    res.status(201).json(signature);
  } catch (error) {
    console.error(`Error creating new signature: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const getSignatureById = async (req, res) => {
  try {
    const signature = await Oath.findById(req.query.id);
    if (!signature) {
      return res.status(404).json({ message: "Signature not found" });
    }
    console.log(`Signature found: ${signature}`);
    res.status(200).json(signature);
  } catch (error) {
    console.error(`Error retrieving signature: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllSignatures = async (req, res) => {
  try {
    const signatures = await Oath.find();
    console.log(`All signatures retrieved: ${signatures}`);
    res.status(200).json(signatures);
  } catch (error) {
    console.error(`Error retrieving all signatures: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateSignatureById = async (req, res) => {
  const { fullName, email, country } = req.body;
  try {
    const signature = await Oath.findById(req.query.id);
    if (!signature) {
      return res.status(404).json({ message: "Signature not found" });
    }
    signature.fullName = fullName || signature.fullName;
    signature.email = email || signature.email;
    signature.country = country || signature.country;
    await signature.save();
    console.log(`Signature updated: ${signature}`);
    res.status(200).json(signature);
  } catch (error) {
    console.error(`Error updating signature: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteSignatureById = async (req, res) => {
  try {
    const signature = await Oath.findById(req.query.id);
    if (!signature) {
      return res.status(404).json({ message: "Signature not found" });
    }
    await signature.remove();
    console.log(`Signature deleted: ${signature}`);
    res.status(200).json({ message: "Signature deleted successfully" });
  } catch (error) {
    console.error(`Error deleting signature: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const generateAnalytics = async (req, res) => {
  try {
    const totalSignatures = await Oath.countDocuments();
    const uniqueCountries = await Oath.distinct("country", {
      country: { $exists: true },
    });
    console.log(
      `Analytics data generated: total signatures = ${totalSignatures}, unique countries = ${uniqueCountries.length}`
    );
    res.status(200).json({ totalSignatures, uniqueCountries: uniqueCountries.length });
  } catch (error) {
    console.error(`Error generating analytics data: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};
