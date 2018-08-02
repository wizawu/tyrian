declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
interface XMLSignature extends javax.xml.crypto.XMLStructure {
    XMLNS: string
    validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
    getKeyInfo(): javax.xml.crypto.dsig.keyinfo.KeyInfo
    getSignedInfo(): javax.xml.crypto.dsig.SignedInfo
    getObjects(): java.util.List
    getId(): string
    getSignatureValue(): javax.xml.crypto.dsig.XMLSignature$SignatureValue
    sign(arg0: javax.xml.crypto.dsig.XMLSignContext): void
    getKeySelectorResult(): javax.xml.crypto.KeySelectorResult
}

            }
        }
    }
}