import { component$ } from "@builder.io/qwik";

import { HeadingStyle } from "~/styles/recipes/text";

import { flex } from "~/styled-system/patterns";
import { Toggle } from "~/components/UI/toggle";
import { DocumentSection } from "~/components/documents/document-section";
import { css } from "~/styled-system/css";

const TAB_BUTTONS = [
    { id: "reports", label: "Reports" },
    { id: "legal", label: "Legal" },
];

export default component$(() => {
    const documentsNew = [
        { key: "1", name: "Mifiid questionaire" },
        { key: "2", name: "Bank aggreement" },
    ];

    const documentsOld = [
        { key: "1", name: "Lorem ipsum" },
        { key: "2", name: "Lorem ipsum" },
        { key: "3", name: "Lorem ipsum" },
    ];
    return (
        <div class={css({ mx: "1.8rem" })}>
            <h2 class={HeadingStyle({ type: "secondary" })}>Documents</h2>
            <div class={flex({ justifyContent: "end" })}>
                <Toggle buttons={TAB_BUTTONS} activeTab="legal" />
            </div>
            <DocumentSection
                heading="New documents to sign"
                documents={documentsNew}
            />
            <DocumentSection heading="Old documents" documents={documentsOld} />
        </div>
    );
});
