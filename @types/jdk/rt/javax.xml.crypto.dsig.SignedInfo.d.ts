declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
interface SignedInfo extends javax.xml.crypto.XMLStructure {
    getCanonicalizationMethod(): javax.xml.crypto.dsig.CanonicalizationMethod
    getSignatureMethod(): javax.xml.crypto.dsig.SignatureMethod
    getReferences(): java.util.List
    getId(): string
    getCanonicalizedData(): java.io.InputStream
}

            }
        }
    }
}