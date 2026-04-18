import { fastify } from "fastify";
import fastifyCors from "@fastify/cors";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { getRoomsRoute } from "./db/http/routes/get-rooms.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: '*'
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.listen({ port: env.SERVER_PORT }, () => {
	console.log(`Server is running on port ${env.SERVER_PORT}`);
});

app.register(getRoomsRoute)

app.get('/health', () => {
	return { message: 'OK' };
});
