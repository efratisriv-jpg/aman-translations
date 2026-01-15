
export enum View {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CLIENTS = 'clients',
  CONTACT = 'contact',
  DASHBOARD = 'dashboard',
  CHAT = 'chat',
  STUDIO = 'studio',
  LIVE = 'live'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}
