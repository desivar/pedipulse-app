export interface Task {
  id: number;
  text: string;
}

export interface Sticker {
  icon: string;
  goal: number;
  label: string;
}

export interface AppData {
  message: string;
  quote: string;
  palette: string[]; // Your backend sends this, so it must be here!
}