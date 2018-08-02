declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace validation {
class ValidatorImpl extends javax.xml.validation.Validator implements com.sun.org.apache.xerces.internal.xs.PSVIProvider {
    public constructor(arg0: com.sun.org.apache.xerces.internal.jaxp.validation.XSGrammarPoolContainer)
    public validate(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.Result): void
    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
    public getErrorHandler(): org.xml.sax.ErrorHandler
    public setResourceResolver(arg0: org.w3c.dom.ls.LSResourceResolver | org.w3c.dom.ls.LSResourceResolver$$Lambda): void
    public getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
    public getFeature(arg0: java.lang.String | string): boolean
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public reset(): void
    public getElementPSVI(): com.sun.org.apache.xerces.internal.xs.ElementPSVI
    public getAttributePSVI(arg0: int): com.sun.org.apache.xerces.internal.xs.AttributePSVI
    public getAttributePSVIByName(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.AttributePSVI
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