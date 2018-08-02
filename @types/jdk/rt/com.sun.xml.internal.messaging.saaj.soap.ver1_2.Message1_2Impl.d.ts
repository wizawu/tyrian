declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace ver1_2 {
                                class Message1_2Impl extends com.sun.xml.internal.messaging.saaj.soap.MessageImpl implements javax.xml.soap.SOAPConstants {
                                    public constructor()
                                    public constructor(arg0: javax.xml.soap.SOAPMessage)
                                    public constructor(arg0: boolean, arg1: boolean)
                                    public constructor(arg0: javax.xml.soap.MimeHeaders, arg1: java.io.InputStream)
                                    public constructor(arg0: javax.xml.soap.MimeHeaders, arg1: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType, arg2: int, arg3: java.io.InputStream)
                                    public getSOAPPart(): javax.xml.soap.SOAPPart
                                    protected isCorrectSoapVersion(arg0: int): boolean
                                    protected getExpectedContentType(): string
                                    protected getExpectedAcceptHeader(): string
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}