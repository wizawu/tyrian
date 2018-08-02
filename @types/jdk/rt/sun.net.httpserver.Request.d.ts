declare namespace sun {
    namespace net {
        namespace httpserver {
            class Request {
                public inputStream(): java.io.InputStream
                public outputStream(): java.io.OutputStream
                public readLine(): string
                public requestLine(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}