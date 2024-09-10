import imageUrlBuilder from '@sanity/image-url';
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: '0r0puyos', // Asegúrate de reemplazar esto con tu ID de proyecto real
    dataset: 'production', // Asegúrate de que esto coincida con el dataset que estás usando
    useCdn: true,
    apiVersion: '2024-09-09', // La versión de la API que estás usando
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
