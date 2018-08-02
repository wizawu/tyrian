declare namespace javax {
    namespace xml {
        namespace parsers {
            abstract class DocumentBuilder {
                protected constructor()
                public reset(): void
                public parse(arg0: java.io.InputStream): org.w3c.dom.Document
                public parse(arg0: java.io.InputStream, arg1: java.lang.String | string): org.w3c.dom.Document
                public parse(arg0: java.lang.String | string): org.w3c.dom.Document
                public parse(arg0: java.io.File): org.w3c.dom.Document
                public parse(arg0: org.xml.sax.InputSource): org.w3c.dom.Document
                public isNamespaceAware(): boolean
                public isValidating(): boolean
                public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
                public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
                public newDocument(): org.w3c.dom.Document
                public getDOMImplementation(): org.w3c.dom.DOMImplementation
                public getSchema(): javax.xml.validation.Schema
                public isXIncludeAware(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}