declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace impl {
                    namespace internalspi {
                        namespace encoding {
                            interface StreamDecoder {
                                decode(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.AttachmentSet, arg3: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
                            }
                            interface StreamDecoder$$Lambda {
                                (arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.AttachmentSet, arg3: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
                            }
                        }
                    }
                }
            }
        }
    }
}