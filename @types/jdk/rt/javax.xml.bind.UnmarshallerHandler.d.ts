declare namespace javax {
    namespace xml {
        namespace bind {
            interface UnmarshallerHandler extends org.xml.sax.ContentHandler {
                getResult(): java.lang.Object
            }
        }
    }
}