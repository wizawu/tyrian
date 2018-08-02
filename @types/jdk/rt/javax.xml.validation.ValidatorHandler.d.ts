declare namespace javax {
    namespace xml {
        namespace validation {
abstract class ValidatorHandler implements org.xml.sax.ContentHandler {
    protected constructor()
    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
    public getContentHandler(): org.xml.sax.ContentHandler
    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
    public getErrorHandler(): org.xml.sax.ErrorHandler
    public setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda): void
    public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
    public getTypeInfoProvider(): javax.xml.validation.TypeInfoProvider
    public getFeature(arg0: java.lang.String | string): boolean
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}