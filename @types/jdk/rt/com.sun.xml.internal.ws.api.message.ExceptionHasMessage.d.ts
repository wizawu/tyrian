declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            abstract class ExceptionHasMessage extends com.sun.xml.internal.ws.util.exception.JAXWSExceptionBase {
                                public constructor(arg0: java.lang.String | string, ...arg1: java.lang.Object[])
                                public abstract getFaultMessage(): com.sun.xml.internal.ws.api.message.Message
                                public static class: java.lang.Class<any>
                            }
                            interface ExceptionHasMessage$$Lambda extends com.sun.xml.internal.ws.util.exception.JAXWSExceptionBase {
                                (): com.sun.xml.internal.ws.api.message.Message
                            }
                        }
                    }
                }
            }
        }
    }
}