declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace api {
                        abstract class BridgeContext {
                            protected constructor()
                            public abstract setErrorHandler(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
                            public abstract setAttachmentMarshaller(arg0: javax.xml.bind.attachment.AttachmentMarshaller): void
                            public abstract setAttachmentUnmarshaller(arg0: javax.xml.bind.attachment.AttachmentUnmarshaller): void
                            public abstract getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller
                            public abstract getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}