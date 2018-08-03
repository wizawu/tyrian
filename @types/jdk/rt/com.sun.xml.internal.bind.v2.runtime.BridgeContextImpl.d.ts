declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class BridgeContextImpl extends com.sun.xml.internal.bind.api.BridgeContext {
                                public readonly unmarshaller: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallerImpl
                                public readonly marshaller: com.sun.xml.internal.bind.v2.runtime.MarshallerImpl
                                public setErrorHandler(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
                                public setAttachmentMarshaller(arg0: javax.xml.bind.attachment.AttachmentMarshaller): void
                                public setAttachmentUnmarshaller(arg0: javax.xml.bind.attachment.AttachmentUnmarshaller): void
                                public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller
                                public getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}