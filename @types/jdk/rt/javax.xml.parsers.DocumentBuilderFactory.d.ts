declare namespace javax {
    namespace xml {
        namespace parsers {
            abstract class DocumentBuilderFactory {
                protected constructor()
                public static newInstance(): javax.xml.parsers.DocumentBuilderFactory
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.parsers.DocumentBuilderFactory
                public newDocumentBuilder(): javax.xml.parsers.DocumentBuilder
                public setNamespaceAware(arg0: boolean): void
                public setValidating(arg0: boolean): void
                public setIgnoringElementContentWhitespace(arg0: boolean): void
                public setExpandEntityReferences(arg0: boolean): void
                public setIgnoringComments(arg0: boolean): void
                public setCoalescing(arg0: boolean): void
                public isNamespaceAware(): boolean
                public isValidating(): boolean
                public isIgnoringElementContentWhitespace(): boolean
                public isExpandEntityReferences(): boolean
                public isIgnoringComments(): boolean
                public isCoalescing(): boolean
                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getAttribute(arg0: java.lang.String | string): java.lang.Object
                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                public getFeature(arg0: java.lang.String | string): boolean
                public getSchema(): javax.xml.validation.Schema
                public setSchema(arg0: javax.xml.validation.Schema): void
                public setXIncludeAware(arg0: boolean): void
                public isXIncludeAware(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}