declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                namespace impl {
                    class ParserSAX extends jdk.internal.util.xml.impl.Parser implements jdk.internal.org.xml.sax.XMLReader , jdk.internal.org.xml.sax.Locator {
                        public static readonly FEATURE_NS: string
                        public static readonly FEATURE_PREF: string
                        public constructor()
                        public getContentHandler(): jdk.internal.org.xml.sax.ContentHandler
                        public setContentHandler(arg0: jdk.internal.org.xml.sax.ContentHandler): void
                        public getDTDHandler(): jdk.internal.org.xml.sax.DTDHandler
                        public setDTDHandler(arg0: jdk.internal.org.xml.sax.DTDHandler): void
                        public getErrorHandler(): jdk.internal.org.xml.sax.ErrorHandler
                        public setErrorHandler(arg0: jdk.internal.org.xml.sax.ErrorHandler): void
                        public getEntityResolver(): jdk.internal.org.xml.sax.EntityResolver
                        public setEntityResolver(arg0: jdk.internal.org.xml.sax.EntityResolver | jdk.internal.org.xml.sax.EntityResolver$$Lambda): void
                        public getPublicId(): string
                        public getSystemId(): string
                        public getLineNumber(): int
                        public getColumnNumber(): int
                        public parse(arg0: java.lang.String | string): void
                        public parse(arg0: jdk.internal.org.xml.sax.InputSource): void
                        public parse(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                        public parse(arg0: jdk.internal.org.xml.sax.InputSource, arg1: jdk.internal.org.xml.sax.helpers.DefaultHandler): void
                        protected docType(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        protected comm(arg0: char[], arg1: int): void
                        protected pi(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        protected newPrefix(): void
                        protected skippedEnt(arg0: java.lang.String | string): void
                        protected resolveEnt(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): jdk.internal.org.xml.sax.InputSource
                        protected notDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        protected unparsedEntDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                        protected panic(arg0: java.lang.String | string): void
                        protected bflash(): void
                        protected bflash_ws(): void
                        public getFeature(arg0: java.lang.String | string): boolean
                        public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                        public getProperty(arg0: java.lang.String | string): java.lang.Object
                        public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}