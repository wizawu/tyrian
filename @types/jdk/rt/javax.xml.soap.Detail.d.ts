declare namespace javax {
    namespace xml {
        namespace soap {
            interface Detail extends javax.xml.soap.SOAPFaultElement {
                addDetailEntry(arg0: javax.xml.soap.Name): javax.xml.soap.DetailEntry
                addDetailEntry(arg0: javax.xml.namespace.QName): javax.xml.soap.DetailEntry
                getDetailEntries(): java.util.Iterator
            }
        }
    }
}