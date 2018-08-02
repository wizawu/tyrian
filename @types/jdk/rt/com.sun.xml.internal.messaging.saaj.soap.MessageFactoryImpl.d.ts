declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
class MessageFactoryImpl extends javax.xml.soap.MessageFactory {
    protected static log: java.util.logging.Logger
    protected listener: java.io.OutputStream
    protected lazyAttachments: boolean
    public constructor()
    public listen(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): java.io.OutputStream
    public createMessage(): javax.xml.soap.SOAPMessage
    public createMessage(arg0: boolean, arg1: boolean): javax.xml.soap.SOAPMessage
    public createMessage(arg0: javax.xml.soap.MimeHeaders, arg1: java.io.InputStream): javax.xml.soap.SOAPMessage
    protected static getContentType(arg0: javax.xml.soap.MimeHeaders): string
    public setLazyAttachmentOptimization(arg0: boolean): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}