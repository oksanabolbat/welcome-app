import { component$ } from "@builder.io/qwik";

import { Button } from "~/styles/recipes/buttons";
import { inputStyle } from "~/styles/recipes/input";

interface AddItemProps {
    inputValue: { value: string };
    submitted: { value: boolean };
}

export const AddItem = component$((props: AddItemProps) => {
    return (
        <form
            preventdefault:submit
            onSubmit$={() => {
                props.submitted.value = true;
            }}
        >
            <input
                class={inputStyle()}
                type="text"
                bind:value={props.inputValue}
            />
            <Button type="submit" size="sm">
                add
            </Button>
        </form>
    );
});
