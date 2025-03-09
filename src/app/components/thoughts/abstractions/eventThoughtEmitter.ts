import {Thought} from "./thoughts";

export interface EventThought {
  thought: Thought;
  event?: "edit" | "delete" | "deleted";
}
