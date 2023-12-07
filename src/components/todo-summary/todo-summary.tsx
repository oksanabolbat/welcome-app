import { component$, useContext } from "@builder.io/qwik";
import { todoCtxId } from "~/routes/todo-context";

export const TodoSummary = component$(() => {
    const todoItems = useContext(todoCtxId);
    const itemsCount = todoItems.length;

    return (
        <>
            <h3>Your tasks:</h3>

            {itemsCount > 0 ? (
                <p>You have {itemsCount} tasks</p>
            ) : (
                <p>You don't have any tasks</p>
            )}
        </>
    );
});
