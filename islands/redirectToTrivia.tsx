import { useEffect } from "preact/hooks";

export const RedirectToTrivia = () => {
    useEffect(() => {
        globalThis.location.pathname = "/trivia"; // Redirige automáticamente
    }, []);

    return null; // No renderiza nada
};

