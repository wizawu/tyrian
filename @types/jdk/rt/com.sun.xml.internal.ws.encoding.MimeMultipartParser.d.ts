declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        class MimeMultipartParser {
                            public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.developer.StreamingAttachmentFeature)
                            public getRootPart(): com.sun.xml.internal.ws.api.message.Attachment
                            public getAttachmentParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.message.Attachment>
                            public getAttachmentPart(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.message.Attachment
                            public getContentType(): com.sun.xml.internal.ws.encoding.ContentTypeImpl
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}