export interface GameProject {
  id: string;
  title: string;
  name: string; // For backwards compatibility
  description: string;
  category: string;
  tags: string[];
  image?: string;
  secondaryImage?: string; // Additional image for modal
  difficulty: string;
  teamSize?: string;
  duration?: string;
  coordinator?: string; // Original field, kept for compatibility
  mentor?: string; // New field for mentor information
  gameEngine?: string; // Game engine being used
  gameType?: string; // 2D/3D etc.
  genre?: string; // Genre of the game
  inspiration?: string; // Inspiration or references
  desiredRoles?: string; // Desired team roles
  spreadsheetLink?: string;
} 