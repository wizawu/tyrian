declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace databinding {
                        interface WSDLResolver {
                            getWSDL(arg0: java.lang.String | string): javax.xml.transform.Result
                            getAbstractWSDL(arg0: javax.xml.ws.Holder<java.lang.String>): javax.xml.transform.Result
                            getSchemaOutput(arg0: java.lang.String | string, arg1: javax.xml.ws.Holder<java.lang.String>): javax.xml.transform.Result
                        }
                    }
                }
            }
        }
    }
}