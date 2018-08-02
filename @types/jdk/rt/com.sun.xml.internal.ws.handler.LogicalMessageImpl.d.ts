declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace handler {
class LogicalMessageImpl implements javax.xml.ws.LogicalMessage {
    protected defaultJaxbContext: com.sun.xml.internal.ws.spi.db.BindingContext
    public constructor(arg0: com.sun.xml.internal.ws.spi.db.BindingContext, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda)
    public getPayload(): javax.xml.transform.Source
    public setPayload(arg0: javax.xml.transform.Source): void
    public getPayload(arg0: com.sun.xml.internal.ws.spi.db.BindingContext): java.lang.Object
    public getPayload(arg0: javax.xml.bind.JAXBContext): java.lang.Object
    public setPayload(arg0: java.lang.Object, arg1: com.sun.xml.internal.ws.spi.db.BindingContext): void
    public setPayload(arg0: java.lang.Object, arg1: javax.xml.bind.JAXBContext): void
    public isPayloadModifed(): boolean
    public getMessage(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.message.AttachmentSet, arg2: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Message
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}