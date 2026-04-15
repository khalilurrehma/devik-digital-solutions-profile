import { Helmet } from "react-helmet-async";
import { createElement } from "react";

/**
 * Returns a <Helmet> element that injects <title> + <meta description>.
 * Works both client-side and at SSG build time — react-helmet-async
 * serialises the tags into each pre-rendered HTML file so Google sees them.
 *
 * Usage: return <> {usePageMeta("Title", "Desc")} <yourJSX /> </>
 */
export const usePageMeta = (title: string, description: string) =>
  createElement(
    Helmet,
    null,
    createElement("title", null, title),
    createElement("meta", { name: "description", content: description }),
    createElement("meta", { property: "og:title",       content: title }),
    createElement("meta", { property: "og:description", content: description }),
    createElement("meta", { name: "twitter:title",       content: title }),
    createElement("meta", { name: "twitter:description", content: description }),
  );
