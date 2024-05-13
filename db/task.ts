export interface Task {
  name: string;
  created_at: string;
  status: string;
}

export interface DbTask extends Task {
  id?: number;
}
