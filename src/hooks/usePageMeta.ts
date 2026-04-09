import { useEffect } from "react";

export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }
  }, [description, title]);
};
