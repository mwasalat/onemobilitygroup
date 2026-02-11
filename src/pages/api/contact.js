import path from "path";
import fs from "fs";
import * as XLSX from "xlsx";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const filePath = path.join(process.cwd(), "contact-submissions.xlsx");
    const newRow = {
      Name: name,
      Email: email,
      Message: message,
      Date: new Date().toLocaleString(),
    };

    let workbook;
    let worksheet;

    if (fs.existsSync(filePath)) {
      // Read existing file
      const fileBuffer = fs.readFileSync(filePath);
      workbook = XLSX.read(fileBuffer, { type: "buffer" });
      worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const existingData = XLSX.utils.sheet_to_json(worksheet);
      existingData.push(newRow);
      worksheet = XLSX.utils.json_to_sheet(existingData);
      workbook.Sheets[workbook.SheetNames[0]] = worksheet;
    } else {
      // Create new file
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.json_to_sheet([newRow]);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
    }

    XLSX.writeFile(workbook, filePath);

    return res.status(200).json({ message: "Thank you for contacting us! We will get back to you shortly." });
  } catch (error) {
    console.error("Error saving contact form:", error);
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
}
