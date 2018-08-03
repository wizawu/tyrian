declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace writers {
                        class WriterUtility {
                            public static readonly START_COMMENT: string
                            public static readonly END_COMMENT: string
                            public static readonly DEFAULT_ENCODING: string
                            public static readonly DEFAULT_XMLDECL: string
                            public static readonly DEFAULT_XML_VERSION: string
                            public static readonly CLOSE_START_TAG: char
                            public static readonly OPEN_START_TAG: char
                            public static readonly OPEN_END_TAG: string
                            public static readonly CLOSE_END_TAG: char
                            public static readonly START_CDATA: string
                            public static readonly END_CDATA: string
                            public static readonly CLOSE_EMPTY_ELEMENT: string
                            public static readonly SPACE: string
                            public static readonly UTF_8: string
                            public constructor()
                            public constructor(arg0: java.io.Writer)
                            public setWriter(arg0: java.io.Writer): void
                            public setEscapeCharacters(arg0: boolean): void
                            public getEscapeCharacters(): boolean
                            public writeXMLContent(arg0: char[], arg1: int, arg2: int): void
                            public writeXMLContent(arg0: java.lang.String | string): void
                            public writeXMLAttributeValue(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}