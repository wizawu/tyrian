declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class SOAPFactory {
                public constructor()
                public createElement(arg0: org.w3c.dom.Element): javax.xml.soap.SOAPElement
                public abstract createElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                public createElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                public abstract createElement(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
                public abstract createElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.soap.SOAPElement
                public abstract createDetail(): javax.xml.soap.Detail
                public abstract createFault(arg0: java.lang.String | string, arg1: javax.xml.namespace.QName): javax.xml.soap.SOAPFault
                public abstract createFault(): javax.xml.soap.SOAPFault
                public abstract createName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.soap.Name
                public abstract createName(arg0: java.lang.String | string): javax.xml.soap.Name
                public static newInstance(): javax.xml.soap.SOAPFactory
                public static newInstance(arg0: java.lang.String | string): javax.xml.soap.SOAPFactory
                public static class: java.lang.Class<any>
            }
        }
    }
}