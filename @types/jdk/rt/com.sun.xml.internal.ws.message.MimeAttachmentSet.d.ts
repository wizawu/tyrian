declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        class MimeAttachmentSet implements com.sun.xml.internal.ws.api.message.AttachmentSet {
                            public constructor(arg0: com.sun.xml.internal.ws.encoding.MimeMultipartParser)
                            public get(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.message.Attachment
                            public isEmpty(): boolean
                            public add(arg0: com.sun.xml.internal.ws.api.message.Attachment): void
                            public iterator(): java.util.Iterator<com.sun.xml.internal.ws.api.message.Attachment>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}