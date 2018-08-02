declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface SignatureProperties extends javax.xml.crypto.XMLStructure {
                    TYPE: string
                    getId(): string
                    getProperties(): java.util.List
                }
            }
        }
    }
}