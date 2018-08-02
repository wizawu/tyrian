declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace file {
                    class FileURLConnection extends sun.net.www.URLConnection {
                        protected constructor(arg0: java.net.URL, arg1: java.io.File)
                        public connect(): void
                        public getHeaderField(arg0: java.lang.String | string): string
                        public getHeaderField(arg0: int): string
                        public getContentLength(): int
                        public getContentLengthLong(): long
                        public getHeaderFieldKey(arg0: int): string
                        public getProperties(): sun.net.www.MessageHeader
                        public getLastModified(): long
                        public getInputStream(): java.io.InputStream
                        public getPermission(): java.security.Permission
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}