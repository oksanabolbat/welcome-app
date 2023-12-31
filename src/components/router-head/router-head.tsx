import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
    const head = useDocumentHead();
    const loc = useLocation();

    return (
        <>
            <title>{head.title}</title>

            <link rel="canonical" href={loc.url.href} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <link
                rel="stylesheet"
                type="text/css"
                href="/add_to_homescreen/style/addtohomescreen.css"
            />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />

            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black"
            />
            <meta name="apple-mobile-web-app-title" content="Your App" />

            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

            {head.meta.map((m) => (
                <meta key={m.key} {...m} />
            ))}

            {head.links.map((l) => (
                <link key={l.key} {...l} />
            ))}

            {head.styles.map((s) => (
                <style
                    key={s.key}
                    {...s.props}
                    dangerouslySetInnerHTML={s.style}
                />
            ))}
        </>
    );
});
