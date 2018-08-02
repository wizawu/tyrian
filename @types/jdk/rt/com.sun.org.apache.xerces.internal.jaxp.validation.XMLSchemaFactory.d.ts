declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace validation {
class XMLSchemaFactory extends javax.xml.validation.SchemaFactory {
    public constructor()
    public isSchemaLanguageSupported(arg0: java.lang.String | string): boolean
    public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
    public setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda): void
    public getErrorHandler(): org.xml.sax.ErrorHandler
    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
    public newSchema(arg0: javax.xml.transform.Source[]): javax.xml.validation.Schema
    public newSchema(): javax.xml.validation.Schema
    public getFeature(arg0: java.lang.String | string): boolean
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
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