declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class SOAPConnectionFactory {
                public constructor()
                public static newInstance(): javax.xml.soap.SOAPConnectionFactory
                public abstract createConnection(): javax.xml.soap.SOAPConnection
                public static class: java.lang.Class<any>
            }
            interface SOAPConnectionFactory$$Lambda {
                (): javax.xml.soap.SOAPConnection
            }
        }
    }
}