declare namespace javax {
    namespace xml {
        namespace xpath {
            interface XPathExpression {
                evaluate(arg0: java.lang.Object, arg1: javax.xml.namespace.QName): java.lang.Object
                evaluate(arg0: java.lang.Object): string
                evaluate(arg0: org.xml.sax.InputSource, arg1: javax.xml.namespace.QName): java.lang.Object
                evaluate(arg0: org.xml.sax.InputSource): string
            }
        }
    }
}