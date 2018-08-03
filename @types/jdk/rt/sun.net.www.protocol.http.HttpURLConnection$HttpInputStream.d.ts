declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    class HttpURLConnection$HttpInputStream extends java.io.FilterInputStream {
                        public constructor(arg0: sun.net.www.protocol.http.HttpURLConnection, arg1: java.io.InputStream | java.io.InputStream$$Lambda)
                        public constructor(arg0: sun.net.www.protocol.http.HttpURLConnection, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: java.net.CacheRequest)
                        public mark(arg0: int): void
                        public reset(): void
                        public read(): int
                        public read(arg0: byte[]): int
                        public read(arg0: byte[], arg1: int, arg2: int): int
                        public skip(arg0: long): long
                        public close(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}