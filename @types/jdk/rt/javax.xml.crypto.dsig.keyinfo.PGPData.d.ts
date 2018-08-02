declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace keyinfo {
                    interface PGPData extends javax.xml.crypto.XMLStructure {
                        TYPE: string
                        getKeyId(): byte[]
                        getKeyPacket(): byte[]
                        getExternalElements(): java.util.List
                    }
                }
            }
        }
    }
}