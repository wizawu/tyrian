declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            interface Attachment {
                                getContentId(): string
                                getContentType(): string
                                asByteArray(): byte[]
                                asDataHandler(): javax.activation.DataHandler
                                asSource(): javax.xml.transform.Source
                                asInputStream(): java.io.InputStream
                                writeTo(arg0: java.io.OutputStream): void
                                writeTo(arg0: javax.xml.soap.SOAPMessage): void
                            }
                        }
                    }
                }
            }
        }
    }
}