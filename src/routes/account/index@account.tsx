import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";
import { buttonStyle } from "~/styles/recipes/buttons";

import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    const imgSrc =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDJJISsYkVH9k-pSpvpCKlnw973ZAC030HMP0kJz0pePryjrzJwWXlOyuHDfTnA3XzMA&usqp=CAU";
    return (
        <div class={css({ position: "relative" })}>
            <div class={css({ height: "15.3125rem", bgColor: "brand" })}>
                <h4
                    class={css({
                        textStyle: "textStyles.headingPrimary",
                        fontSize: "1rem",
                        pt: "1.25rem",
                        m: "0 auto",
                        w: "fit-content",
                    })}
                >
                    Fictive company A/S
                </h4>
            </div>

            <img
                src={imgSrc}
                alt="avatar"
                width={144}
                height={144}
                class={css({
                    borderRadius: "50%",
                    border: "4px solid #fff",
                    w: "9.875rem",
                    h: "9.875rem",
                    display: "block",
                    m: "-7.315rem auto 0 auto",
                })}
            />
            <h1
                class={css({
                    fontSize: "1.875rem",
                    fontWeight: "600",
                    textAlign: "center",
                    mb: "2rem",
                })}
            >
                Jane Doe
            </h1>
            <Link
                href="/login/"
                class={[
                    buttonStyle({
                        type: "logout",
                        color: "logout",
                    }),
                    css({ mb: "1rem" }),
                ]}
            >
                Log out
            </Link>
            <button class={buttonStyle({ type: "delete" })}>
                Delete account
            </button>
        </div>
    );
});
