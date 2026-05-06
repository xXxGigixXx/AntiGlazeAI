export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: number;
}

export interface UserStats {
  clout: number; // "Realness" score
  laziness: number;
  grade: 'F' | 'D' | 'C' | 'B' | 'A' | 'S';
}
