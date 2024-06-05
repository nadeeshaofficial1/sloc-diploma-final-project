// server.ts

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3001; // or any other port you prefer

app.use(cors());
app.use(bodyParser.json());

app.post('/submitForm', async (req, res) => {
  try {
    const { fuelType, bookingDate, bookingTime, contactNumber } = req.body;

    // Replace these values with your Google Sheets API key and sheet ID
    const apiKey = 'YOUR_GOOGLE_API_KEY';
    const sheetId = 'YOUR_GOOGLE_SHEET_ID';
    const sheetName = 'Sheet1'; // Change to your sheet name

    const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A1:append?valueInputOption=USER_ENTERED`;

    const values = [[fuelType, bookingDate, bookingTime, contactNumber]];
    const data = { values };

    const response = await axios.post(endpoint, data, {
      params: { key: apiKey },
    });

    res.status(200).json({ success: true, response: response.data });
  } catch (error) {
    console.error('Error submitting data:', error);

    // Cast the error to the Error type
    const errorMessage = (error as Error).message;

    res.status(500).json({ success: false, error: errorMessage });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
