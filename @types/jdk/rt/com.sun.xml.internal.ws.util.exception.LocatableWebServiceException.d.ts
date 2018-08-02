declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace exception {
class LocatableWebServiceException extends javax.xml.ws.WebServiceException {
    public constructor(arg0: java.lang.String | string, ...arg1: org.xml.sax.Locator[])
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, ...arg2: org.xml.sax.Locator[])
    public constructor(arg0: java.lang.Throwable, ...arg1: org.xml.sax.Locator[])
    public constructor(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamReader)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, arg2: javax.xml.stream.XMLStreamReader)
    public constructor(arg0: java.lang.Throwable, arg1: javax.xml.stream.XMLStreamReader)
    public getLocation(): java.util.List<org.xml.sax.Locator>
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}