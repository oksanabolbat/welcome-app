import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { Button } from "~/recipes/button";

import { inputStyle } from "~/recipes/input";
import { TodoList } from "./todo-list";
import { todoCtxId } from "../todo-context";
import { AddItem } from "./add-item";

export interface ItemProps {
    id: number;
    text: string;
    status: "new" | "in progress" | "done";
}

export default component$(() => {
    const textSignal = useSignal("");

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

    return (
        <>
            <form preventdefault:submit onSubmit$={addItemHandler}>
                <input
                    class={inputStyle()}
                    type="text"
                    bind:value={textSignal}
                />
                <Button type="submit" size="sm">
                    add
                </Button>
            </form>
            <AddItem />
            <TodoList />
        </>
    );
});
