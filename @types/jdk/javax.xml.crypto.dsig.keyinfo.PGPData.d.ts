declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        namespace keyinfo {

          interface PGPData extends javax.xml.crypto.XMLStructure {
            public static readonly TYPE: java.lang.String
            getKeyId(): byte[]
            getKeyPacket(): byte[]
            getExternalElements(): java.util.List<javax.xml.crypto.XMLStructure>
          }

        }
      }
    }
  }
}
