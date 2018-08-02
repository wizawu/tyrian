declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        class JAXBAttachment implements com.sun.xml.internal.ws.api.message.Attachment , javax.activation.DataSource {
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.spi.db.XMLBridge, arg3: java.lang.String | string)
                            public getContentId(): string
                            public getContentType(): string
                            public asByteArray(): byte[]
                            public asDataHandler(): javax.activation.DataHandler
                            public asSource(): javax.xml.transform.Source
                            public asInputStream(): java.io.InputStream
                            public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public writeTo(arg0: javax.xml.soap.SOAPMessage): void
                            public getInputStream(): java.io.InputStream
                            public getOutputStream(): java.io.OutputStream
                            public getName(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}