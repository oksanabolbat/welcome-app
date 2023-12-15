import { component$, useContext } from "@builder.io/qwik";

import { todoCtxId } from "../todo-context";
import { liStyle } from "~/styles/recipes/li";

export const TodoList = component$(() => {
    const todoItems = useContext(todoCtxId);

    return (
        <div>
            <h3>Your to do list:</h3>
            <ul>
                {todoItems.map((el) => (
                    <li key={el.id} class={liStyle({ status: "inProgress" })}>
                        {el.text}
                    </li>
                ))}
            </ul>
        </div>
    );
});
