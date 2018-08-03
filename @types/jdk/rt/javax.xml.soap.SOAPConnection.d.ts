declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class SOAPConnection {
                public constructor()
                public abstract call(arg0: javax.xml.soap.SOAPMessage, arg1: java.lang.Object): javax.xml.soap.SOAPMessage
                public get(arg0: java.lang.Object): javax.xml.soap.SOAPMessage
                public abstract close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}