declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace keyinfo {
                    abstract class KeyInfoFactory {
                        protected constructor()
                        public static getInstance(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        public static getInstance(): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        public getMechanismType(): string
                        public getProvider(): java.security.Provider
                        public abstract newKeyInfo(arg0: java.util.List): javax.xml.crypto.dsig.keyinfo.KeyInfo
                        public abstract newKeyInfo(arg0: java.util.List, arg1: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyInfo
                        public abstract newKeyName(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyName
                        public abstract newKeyValue(arg0: java.security.PublicKey): javax.xml.crypto.dsig.keyinfo.KeyValue
                        public abstract newPGPData(arg0: byte[]): javax.xml.crypto.dsig.keyinfo.PGPData
                        public abstract newPGPData(arg0: byte[], arg1: byte[], arg2: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData
                        public abstract newPGPData(arg0: byte[], arg1: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData
                        public abstract newRetrievalMethod(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
                        public abstract newRetrievalMethod(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.List): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
                        public abstract newX509Data(arg0: java.util.List): javax.xml.crypto.dsig.keyinfo.X509Data
                        public abstract newX509IssuerSerial(arg0: java.lang.String | string, arg1: java.math.BigInteger): javax.xml.crypto.dsig.keyinfo.X509IssuerSerial
                        public abstract isFeatureSupported(arg0: java.lang.String | string): boolean
                        public abstract getURIDereferencer(): javax.xml.crypto.URIDereferencer
                        public abstract unmarshalKeyInfo(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.keyinfo.KeyInfo
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}