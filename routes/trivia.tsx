import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Trivial } from "../types.ts";
import { Pregunta } from "../islands/pregunta.tsx";

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Trivial>) => {
        try {
            const API_KEY = Deno.env.get('API_KEY');
            if (!API_KEY) throw new Error("API_KEY not found");
            const response = await Axios.get<Trivial[]>(`https://api.api-ninjas.com/v1/trivia`, {
                headers: {
                    'X-Api-Key': "+OWGjzq8bw10JOFeJRp6ig==FCKY09pqAO6oHYGc"
                }
            });
            return ctx.render(response.data[0]);
        } catch(error) {
            console.error(error);
            throw new Error("Error fetching data");
        }
    }
}

const Page = (props: PageProps<Trivial>) => {
    return (
        <div>
            {console.log(props.data.answer)}
            <Pregunta data={props.data} />
        </div>
    );
}

export default Page;