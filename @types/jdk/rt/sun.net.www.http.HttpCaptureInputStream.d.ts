declare namespace sun {
    namespace net {
        namespace www {
            namespace http {
                class HttpCaptureInputStream extends java.io.FilterInputStream {
                    public constructor(arg0: java.io.InputStream, arg1: sun.net.www.http.HttpCapture)
                    public read(): int
                    public close(): void
                    public read(arg0: byte[]): int
                    public read(arg0: byte[], arg1: int, arg2: int): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}