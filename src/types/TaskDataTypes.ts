export type tasksType = {
  _id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "in progress" | "completed";
};

export type singleTaskType = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
