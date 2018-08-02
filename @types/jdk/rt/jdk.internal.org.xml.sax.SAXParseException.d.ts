declare namespace jdk {
    namespace internal {
        namespace org {
            namespace xml {
                namespace sax {
                    class SAXParseException extends jdk.internal.org.xml.sax.SAXException {
                        public constructor(arg0: java.lang.String | string, arg1: jdk.internal.org.xml.sax.Locator)
                        public constructor(arg0: java.lang.String | string, arg1: jdk.internal.org.xml.sax.Locator, arg2: java.lang.Exception)
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: int)
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: java.lang.Exception)
                        public getPublicId(): string
                        public getSystemId(): string
                        public getLineNumber(): int
                        public getColumnNumber(): int
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}