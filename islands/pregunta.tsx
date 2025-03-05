import { FunctionalComponent } from "preact/src/index.d.ts";
import { useSignal } from "@preact/signals";
import { Trivial } from "../types.ts";

type Props = {
    data: Trivial;
}

export const Pregunta: FunctionalComponent<Props> = (Props) => {
    const { data } = Props;
    const answer = useSignal("");

    return (
        <div>
            <div class="tituloTrivia">
                <p>TRIVIA</p>
            </div>
            <div class="perguntaTrivia">
                <h3>{data.question}</h3>
                <input type="text" name="answer" placeholder="Escribe tu respuesta aquí" value={answer.value} onInput={(e) => answer.value = e.currentTarget.value}/>
                <button type="submit" onClick={() => {
                    if (answer.value.toLowerCase() === data.answer.toLowerCase())
                    {
                        globalThis.location.href = "/acierto";
                    } 
                    else
                    {
                        globalThis.location.href = "/fallo";
                    }
                }}>Enviar</button>
            </div>
            {console.log(data.answer)}
        </div>
    );
}