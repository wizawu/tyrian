declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
class DOMKeyInfoFactory extends javax.xml.crypto.dsig.keyinfo.KeyInfoFactory {
    public constructor()
    public newKeyInfo(arg0: java.util.List): javax.xml.crypto.dsig.keyinfo.KeyInfo
    public newKeyInfo(arg0: java.util.List, arg1: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyInfo
    public newKeyName(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.KeyName
    public newKeyValue(arg0: java.security.PublicKey): javax.xml.crypto.dsig.keyinfo.KeyValue
    public newPGPData(arg0: byte[]): javax.xml.crypto.dsig.keyinfo.PGPData
    public newPGPData(arg0: byte[], arg1: byte[], arg2: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData
    public newPGPData(arg0: byte[], arg1: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData
    public newRetrievalMethod(arg0: java.lang.String | string): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
    public newRetrievalMethod(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.List): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
    public newX509Data(arg0: java.util.List): javax.xml.crypto.dsig.keyinfo.X509Data
    public newX509IssuerSerial(arg0: java.lang.String | string, arg1: java.math.BigInteger): javax.xml.crypto.dsig.keyinfo.X509IssuerSerial
    public isFeatureSupported(arg0: java.lang.String | string): boolean
    public getURIDereferencer(): javax.xml.crypto.URIDereferencer
    public unmarshalKeyInfo(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda): javax.xml.crypto.dsig.keyinfo.KeyInfo
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}