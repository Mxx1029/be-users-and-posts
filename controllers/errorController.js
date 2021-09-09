// Wildcard for all not defined endpoint:
// instead of just defining the Wildcard route for one HTTP method, like so:
// app.get("*", ....)
// make it work for all routes (that's how it would look in index.js):
// app.use((req, res) => {
//     res.status(404);
//     res.send({ error: "Not found" });
// })

export const wildCardEndpoint = (req, res) => {
    res.status(404);
    res.send({ error: "Not found" });
}
