declare namespace javax {
    namespace xml {
        namespace parsers {
            abstract class SAXParser {
                protected constructor()
                public reset(): void
                public parse(arg0: java.io.InputStream, arg1: org.xml.sax.HandlerBase): void
                public parse(arg0: java.io.InputStream, arg1: org.xml.sax.HandlerBase, arg2: java.lang.String | string): void
                public parse(arg0: java.io.InputStream, arg1: org.xml.sax.helpers.DefaultHandler): void
                public parse(arg0: java.io.InputStream, arg1: org.xml.sax.helpers.DefaultHandler, arg2: java.lang.String | string): void
                public parse(arg0: java.lang.String | string, arg1: org.xml.sax.HandlerBase): void
                public parse(arg0: java.lang.String | string, arg1: org.xml.sax.helpers.DefaultHandler): void
                public parse(arg0: java.io.File, arg1: org.xml.sax.HandlerBase): void
                public parse(arg0: java.io.File, arg1: org.xml.sax.helpers.DefaultHandler): void
                public parse(arg0: org.xml.sax.InputSource, arg1: org.xml.sax.HandlerBase): void
                public parse(arg0: org.xml.sax.InputSource, arg1: org.xml.sax.helpers.DefaultHandler): void
                public getParser(): org.xml.sax.Parser
                public getXMLReader(): org.xml.sax.XMLReader
                public isNamespaceAware(): boolean
                public isValidating(): boolean
                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getProperty(arg0: java.lang.String | string): java.lang.Object
                public getSchema(): javax.xml.validation.Schema
                public isXIncludeAware(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}