declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface Manifest extends javax.xml.crypto.XMLStructure {
                    TYPE: string
                    getId(): string
                    getReferences(): java.util.List
                }
            }
        }
    }
}