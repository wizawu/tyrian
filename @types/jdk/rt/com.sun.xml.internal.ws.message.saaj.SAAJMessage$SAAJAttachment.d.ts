declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace saaj {
                            class SAAJMessage$SAAJAttachment implements com.sun.xml.internal.ws.api.message.AttachmentEx {
                                public constructor(arg0: javax.xml.soap.AttachmentPart)
                                public getContentId(): string
                                public getContentType(): string
                                public asByteArray(): byte[]
                                public asDataHandler(): javax.activation.DataHandler
                                public asSource(): javax.xml.transform.Source
                                public asInputStream(): java.io.InputStream
                                public writeTo(arg0: java.io.OutputStream): void
                                public writeTo(arg0: javax.xml.soap.SOAPMessage): void
                                public getMimeHeaders(): java.util.Iterator<com.sun.xml.internal.ws.api.message.AttachmentEx$MimeHeader>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}