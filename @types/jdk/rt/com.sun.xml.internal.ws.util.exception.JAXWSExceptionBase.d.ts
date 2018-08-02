declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace exception {
abstract class JAXWSExceptionBase extends javax.xml.ws.WebServiceException implements com.sun.istack.internal.localization.Localizable {
    protected constructor(arg0: java.lang.String | string, ...arg1: java.lang.Object[])
    protected constructor(arg0: java.lang.String | string)
    protected constructor(arg0: java.lang.Throwable)
    protected constructor(arg0: com.sun.istack.internal.localization.Localizable)
    protected constructor(arg0: com.sun.istack.internal.localization.Localizable, arg1: java.lang.Throwable)
    public getMessage(): string
    protected getDefaultResourceBundleName(): string
    public getKey(): string
    public getArguments(): java.lang.Object[]
    public getResourceBundleName(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}