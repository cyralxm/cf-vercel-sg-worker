export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.hostname = "my-vercel-node-eta.vercel.app";
    url.port = "443";
    return fetch(new Request(url, request));
  }
};
