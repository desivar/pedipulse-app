// src/types.ts

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
}