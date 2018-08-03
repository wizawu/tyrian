declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class SAAJMetaFactory {
                protected constructor()
                protected abstract newMessageFactory(arg0: java.lang.String | string): javax.xml.soap.MessageFactory
                protected abstract newSOAPFactory(arg0: java.lang.String | string): javax.xml.soap.SOAPFactory
                public static class: java.lang.Class<any>
            }
        }
    }
}