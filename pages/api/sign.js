import connectDB from "../../utils/connectdb";
try {
    connectDB();
  } catch (error) {
    console.error(`Error connecting to database: ${error}`);
    process.exit(1);
  }
  

import Oath from "../../models/signOath";

export default async function handler(req, res) {
  const { method, query, body } = req;

  switch (method) {
    case "POST":
      try {
        const { fullName, email, country } = body;
        const signature = new Oath({ fullName, email, country });
        await signature.save();
        console.log(`New signature created: ${signature}`);
        res.status(201).json({ status: "success", message: "You have successfully signed the oath", data: signature});
      } catch (error) {
        console.error(`Error creating new signature: ${error}`);
        res.status(500).json({ error: "Server error" });
      }
      break;

    case "GET":
      if (query.id) {
        try {
          const signature = await Oath.findById(query.id);
          if (!signature) {
            res.status(404).json({ error: "Signature not found" });
          } else {
            console.log(`Signature found: ${signature}`);
            res.json(signature);
          }
        } catch (error) {
          console.error(`Error retrieving signature: ${error}`);
          res.status(500).json({ error: "Server error" });
        }
      } else if (query.analytics) {
        try {
          const signatureCount = await Oath.countDocuments();
          const countryCount = await Oath.distinct("country", {
            country: { $exists: true },
          });
          // console.log(
          //   `Analytics data generated: total signatures = ${signatureCount}, unique countries = ${countryCount.length}`
          // );
          res.json({
            signatureCount: String(signatureCount),
            countryCount: String(countryCount.length),
          });
        } catch (error) {
          console.error(`Error generating analytics data: ${error}`);
          res.status(500).json({ error: "Server error" });
        }
      } else {
        try {
          const signatures = await Oath.find();
          console.log(`All signatures retrieved: ${signatures}`);
          res.json(signatures);
        } catch (error) {
          console.error(`Error retrieving all signatures: ${error}`);
          res.status(500).json({ error: "Server error" });
        }
      }
      break;

    case "PUT":
      if (query.id) {
        try {
          const signature = await Oath.findById(query.id);
          if (!signature) {
            res.status(404).json({ error: "Signature not found" });
          } else {
            signature.fullName = body.fullName || signature.fullName;
            signature.email = body.email || signature.email;
            signature.country = body.country || signature.country;
            await signature.save();
            console.log(`Signature updated: ${signature}`);
            res.json(signature);
          }
        } catch (error) {
          console.error(`Error updating signature: ${error}`);
          res.status(500).json({ error: "Server error" });
        }
      } else {
        res.status(400).json({ error: "Invalid request" });
      }
      break;

    case "DELETE":
      if (query.id) {
        try {
          const signature = await Oath.findById(query.id);
          if (!signature) {
            res.status(404).json({ error: "Signature not found" });
          } else {
            await signature.remove();
            console.log(`Signature deleted: ${signature}`);
            res.json({ message: "Signature deleted successfully" });
          }
        } catch (error) {
          console.error(`Error deleting signature: ${error}`);
          res.status(500).json({ error: "Server error" });
        }
      } else {
        res.status(400).json({ error: "Invalid request" });
    }
    break;
    case "GET":
    if (query.id) {
        try {
        const signature = await Oath.findById(query.id);
        if (!signature) {
        res.status(404).json({ error: "Signature not found" });
        } else {
        console.log(`Signature found: ${signature}`);
        res.json(signature);
        }
        } catch (error) {
        console.error(`Error retrieving signature: ${error}`);
        res.status(500).json({ error: "Server error" });
        }
        } else if (query.analytics) {
        try {
        const totalSignatures = await Oath.countDocuments();
        const uniqueCountries = await Oath.distinct("country", {
        country: { $exists: true },
        });
        console.log(`
        Analytics data generated: total signatures = ${totalSignatures}, unique countries = ${uniqueCountries.length}
        `);
        res.json({
        totalSignatures,
        uniqueCountries: uniqueCountries.length,
        });
        } catch (error) {
        console.error(`Error generating analytics data: ${error}`);
        res.status(500).json({ error: "Server error" });
        }
        } else {
        try {
        const signatures = await Oath.find();
        console.log(`All signatures retrieved: ${signatures}`);
        res.json(signatures);
        } catch (error) {
        console.error(`Error retrieving all signatures: ${error}`);
        res.status(500).json({ error: "Server error" });
        }
        }
        break;
        default:
        res.status(400).json({ error: "Invalid request" });
        }
        };
        
    
    
