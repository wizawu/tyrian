declare namespace javax {
    namespace xml {
        namespace validation {
abstract class Validator {
    protected constructor()
    public reset(): void
    public validate(arg0: javax.xml.transform.Source): void
    public validate(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.Result): void
    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
    public getErrorHandler(): org.xml.sax.ErrorHandler
    public setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda): void
    public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
    public getFeature(arg0: java.lang.String | string): boolean
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}