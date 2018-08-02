declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace writers {
                        class WriterUtility {
                            public static START_COMMENT: string
                            public static END_COMMENT: string
                            public static DEFAULT_ENCODING: string
                            public static DEFAULT_XMLDECL: string
                            public static DEFAULT_XML_VERSION: string
                            public static CLOSE_START_TAG: char
                            public static OPEN_START_TAG: char
                            public static OPEN_END_TAG: string
                            public static CLOSE_END_TAG: char
                            public static START_CDATA: string
                            public static END_CDATA: string
                            public static CLOSE_EMPTY_ELEMENT: string
                            public static SPACE: string
                            public static UTF_8: string
                            public constructor()
                            public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda)
                            public setWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
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