declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                namespace http {
                    abstract class HttpContext {
                        protected handler: javax.xml.ws.spi.http.HttpHandler
                        public constructor()
                        public setHandler(arg0: javax.xml.ws.spi.http.HttpHandler): void
                        public getPath(): string
                        public getAttribute(arg0: java.lang.String | string): java.lang.Object
                        public getAttributeNames(): java.util.Set<java.lang.String>
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}