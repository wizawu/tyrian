declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class MessageFactory {
                public constructor()
                public static newInstance(): javax.xml.soap.MessageFactory
                public static newInstance(arg0: java.lang.String | string): javax.xml.soap.MessageFactory
                public createMessage(): javax.xml.soap.SOAPMessage
                public createMessage(arg0: javax.xml.soap.MimeHeaders, arg1: java.io.InputStream): javax.xml.soap.SOAPMessage
                public static class: java.lang.Class<any>
            }
        }
    }
}