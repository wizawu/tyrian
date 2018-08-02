declare namespace sun {
    namespace net {
        namespace www {
            namespace http {
class ChunkedInputStream extends java.io.InputStream implements sun.net.www.http.Hurryable {
    public constructor(arg0: java.io.InputStream, arg1: sun.net.www.http.HttpClient, arg2: sun.net.www.MessageHeader)
    public read(): int
    public read(arg0: byte[], arg1: int, arg2: int): int
    public available(): int
    public close(): void
    public hurry(): boolean
    public static class: java.lang.Class<any>
}

class ChunkedInputStream$$Lambda extends java.io.InputStream implements sun.net.www.http.Hurryable {
    public constructor(arg0: java.io.InputStream, arg1: sun.net.www.http.HttpClient, arg2: sun.net.www.MessageHeader)
}

            }
        }
    }
}