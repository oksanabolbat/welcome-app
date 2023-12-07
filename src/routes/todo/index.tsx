import {
    $,
    component$,
    useContext,
    useSignal,
    useTask$,
} from "@builder.io/qwik";

import { TodoList } from "./todo-list";
import { todoCtxId } from "../todo-context";
import { AddItem } from "./add-item";
import { TodoSummary } from "~/components/todo-summary/todo-summary";

export interface ItemProps {
    id: number;
    text: string;
    status: "new" | "in progress" | "done";
}

export default component$(() => {
    const textSignal = useSignal("");
    const submittedSignal = useSignal(false);

    const todoItems: ItemProps[] = useContext(todoCtxId);

    const addItemHandler = $(() => {
        if (textSignal.value.length < 1) {
            return;
        }
        todoItems.push({
            id:
                todoItems.length > 0
                    ? todoItems[todoItems.length - 1].id + 1
                    : 1,
            text: textSignal.value,
            status: "new",
        });
        textSignal.value = "";
    });

    useTask$(({ track }) => {
        track(() => {
            submittedSignal.value;
        });
        if (submittedSignal.value) {
            addItemHandler();
            submittedSignal.value = false;
        }
    });

    return (
        <>
            <AddItem submitted={submittedSignal} inputValue={textSignal} />
            <TodoList />
            <TodoSummary />
        </>
    );
});
