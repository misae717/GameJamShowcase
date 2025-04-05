// This is a mock implementation for the Google Sheets API integration
// In a production environment, you would replace this with actual Google Sheets API calls

import { GoogleSpreadsheetRow } from "../types/googleSheets";

type FormData = {
  projectId: string;
  projectTitle: string;
  name: string;
  email: string;
  role: string;
  experience?: string;
  message?: string;
  timestamp: string;
};

// In a real implementation, this would connect to Google Sheets API
export async function addRowToSheet(formData: FormData): Promise<{ success: boolean; error?: string }> {
  try {
    // This is a mock implementation - in production this would use Google Sheets API
    // For example: https://developers.google.com/sheets/api/quickstart/nodejs
    console.log("Adding row to Google Sheet:", formData);
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you would:
    // 1. Authenticate with Google Sheets API
    // 2. Connect to the specific spreadsheet
    // 3. Add the row data to the appropriate sheet
    
    return { success: true };
  } catch (error) {
    console.error("Error adding row to Google Sheet:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    };
  }
}

export async function getSheetRows(projectId: string): Promise<GoogleSpreadsheetRow[]> {
  try {
    // This is a mock implementation - in production this would fetch from Google Sheets
    console.log("Fetching rows for project:", projectId);
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return mock data
    return [
      {
        id: "row1",
        name: "John Smith",
        email: "john@example.com",
        role: "Programmer",
        experience: "Intermediate",
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        profilePic: `https://api.dicebear.com/7.x/avataaars/svg?seed=John`
      },
      {
        id: "row2",
        name: "Maria Garcia",
        email: "maria@example.com",
        role: "Artist",
        experience: "Advanced",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        profilePic: `https://api.dicebear.com/7.x/avataaars/svg?seed=Maria`
      },
      {
        id: "row3",
        name: "Ahmed Hassan",
        email: "ahmed@example.com",
        role: "Game Designer",
        experience: "Beginner",
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        profilePic: `https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed`
      }
    ].filter(() => Math.random() > 0.3); // Randomly return fewer results sometimes
  } catch (error) {
    console.error("Error fetching sheet rows:", error);
    return [];
  }
} 