declare namespace javax {
    namespace xml {
        namespace crypto {
            abstract class KeySelector {
                protected constructor()
                public select(arg0: javax.xml.crypto.dsig.keyinfo.KeyInfo, arg1: javax.xml.crypto.KeySelector$Purpose, arg2: javax.xml.crypto.AlgorithmMethod, arg3: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.KeySelectorResult
                public static singletonKeySelector(arg0: java.security.Key): javax.xml.crypto.KeySelector
                public static class: java.lang.Class<any>
            }
        }
    }
}