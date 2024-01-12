export type Task = {
  taskId: number;
  createdAt: string;
  title: string | null;
  description: string | null | undefined;
};
