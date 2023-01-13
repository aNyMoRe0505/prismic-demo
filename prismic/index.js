import * as prismic from '@prismicio/client';
import fetch from 'node-fetch';

// https://your-repo-name.cdn.prismic.io/api/v2
// https://your-repo-name.prismic.io/api/v2
const client = prismic.createClient('https://your-repo-name.cdn.prismic.io/api/v2', { fetch });

export default client;
