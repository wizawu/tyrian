declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace tools {
                        abstract class TransformInputOutput {
                            public constructor()
                            public parse(arg0: java.lang.String[]): void
                            public parse(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
                            public parse(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: java.lang.String | string): void
                            protected static createRelativePathResolver(arg0: java.lang.String | string): org.xml.sax.EntityResolver
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}