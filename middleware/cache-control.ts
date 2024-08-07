export default defineEventHandler(event => {
    const res = event.node.res;
    const year = 31536000;
    const hour = 60 * 60;
    const url = event.node.req.url;
    
    if (url) {
        const maxAge = url.match(/(.+)\.(jpg|jpeg|gif|css|png|js|ico|svg|mjs)/) ? year : hour;
        res.setHeader('Cache-Control', `max-age=${maxAge} s-maxage=${maxAge}`);
    }
});