declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                namespace internet {
                                    class MimeUtility {
                                        public static readonly ALL: int
                                        public static getEncoding(arg0: javax.activation.DataSource): string
                                        public static getEncoding(arg0: javax.activation.DataHandler): string
                                        public static decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): java.io.InputStream
                                        public static encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): java.io.OutputStream
                                        public static encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string, arg2: java.lang.String | string): java.io.OutputStream
                                        public static encodeText(arg0: java.lang.String | string): string
                                        public static encodeText(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                                        public static decodeText(arg0: java.lang.String | string): string
                                        public static encodeWord(arg0: java.lang.String | string): string
                                        public static encodeWord(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                                        public static decodeWord(arg0: java.lang.String | string): string
                                        public static quote(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                        public static javaCharset(arg0: java.lang.String | string): string
                                        public static mimeCharset(arg0: java.lang.String | string): string
                                        public static getDefaultJavaCharset(): string
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}