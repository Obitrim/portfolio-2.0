import { google } from 'googleapis';

type ContactRow = {
  name: string;
  email: string;
  type: string;
  message: string;
};

export async function appendContactToSheet(data: ContactRow) {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: 'Sheet1!A:E',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          data.name,
          data.email,
          data.type || 'General',
          data.message,
        ],
      ],
    },
  });
}
