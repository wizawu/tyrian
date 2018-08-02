declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface SignatureProperty extends javax.xml.crypto.XMLStructure {
                    getTarget(): string
                    getId(): string
                    getContent(): java.util.List
                }
            }
        }
    }
}