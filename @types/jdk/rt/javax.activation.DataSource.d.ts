declare namespace javax {
    namespace activation {
interface DataSource {
    getInputStream(): java.io.InputStream
    getOutputStream(): java.io.OutputStream
    getContentType(): string
    getName(): string
}

    }
}