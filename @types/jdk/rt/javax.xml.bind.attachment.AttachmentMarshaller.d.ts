declare namespace javax {
    namespace xml {
        namespace bind {
            namespace attachment {
                abstract class AttachmentMarshaller {
                    public constructor()
                    public abstract addMtomAttachment(arg0: javax.activation.DataHandler, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                    public abstract addMtomAttachment(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): string
                    public isXOPPackage(): boolean
                    public abstract addSwaRefAttachment(arg0: javax.activation.DataHandler): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}