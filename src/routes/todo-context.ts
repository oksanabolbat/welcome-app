import { createContextId } from "@builder.io/qwik";
import { type ItemProps } from "./todo";

export const todoCtxId = createContextId<ItemProps[]>("todo-list"); //can be created anywhere in any file
