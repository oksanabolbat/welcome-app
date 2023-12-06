import { $, component$, useStore, useSignal } from "@builder.io/qwik";

import { inputStyle } from "~/recipes/input";

interface ItemProps {
    id: number;
    text: string;
    status: "new" | "in progress" | "done";
}

export default component$(() => {
    const itemsStore = useStore<ItemProps[]>([]);
    const textSignal = useSignal("");

    const addItemHandler = $(() => {
        itemsStore.push({
            id: itemsStore.length + 1,
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
            </form>
            <div>
                <h3>Your to do list:</h3>
                {itemsStore.map((el) => (
                    <li key={el.id}>{el.text}</li>
                ))}
            </div>
        </>
    );
});
