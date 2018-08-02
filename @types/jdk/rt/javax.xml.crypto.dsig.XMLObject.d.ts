declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface XMLObject extends javax.xml.crypto.XMLStructure {
                    TYPE: string
                    getContent(): java.util.List
                    getId(): string
                    getMimeType(): string
                    getEncoding(): string
                }
            }
        }
    }
}