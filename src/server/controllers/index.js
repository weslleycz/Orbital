export function HelloWorld(Request, Response){
    try {
        return Response.json({ data: "hello world", has_error: false });
    } catch (error) {
        return Response.status(400).json({ data: "error", has_error: true });
    }
}
