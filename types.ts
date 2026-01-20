
// View enum for application routing, including new AI dashboard modules
export enum View {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CLIENTS = 'clients',
  CONTACT = 'contact',
  DASHBOARD = 'dashboard',
  CHAT = 'chat',
  STUDIO = 'studio',
  LIVE = 'live',
  PRIVACY = 'privacy',
  IMPRINT = 'imprint'
}

// Interface for managing chat message history
export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

// Interface for images generated within the Creative Studio
export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}
