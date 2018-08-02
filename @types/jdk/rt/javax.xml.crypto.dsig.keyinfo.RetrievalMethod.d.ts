declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace keyinfo {
interface RetrievalMethod extends javax.xml.crypto.URIReference , javax.xml.crypto.XMLStructure {
    getTransforms(): java.util.List
    getURI(): string
    dereference(arg0: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
}

                }
            }
        }
    }
}