declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                namespace internet {
                                    class HeaderTokenizer {
                                        public static readonly RFC822: string
                                        public static readonly MIME: string
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean)
                                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                                        public constructor(arg0: java.lang.String | string)
                                        public next(): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.HeaderTokenizer$Token
                                        public peek(): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.HeaderTokenizer$Token
                                        public getRemainder(): string
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