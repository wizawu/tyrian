declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface XMLSignature$SignatureValue extends javax.xml.crypto.XMLStructure {
                    getId(): string
                    getValue(): byte[]
                    validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
                }
            }
        }
    }
}