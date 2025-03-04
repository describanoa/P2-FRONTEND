import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    data: string;
}

export const Respuesta: FunctionalComponent<Props> = (Props) => {
    const {data} = Props;

    return (
        <div class="respuesta">
            <h1>{data}</h1>
            <a href="/trivia">
                <button type="button">
                    Volver a jugar
                </button>
            </a>
        </div>
    );
}