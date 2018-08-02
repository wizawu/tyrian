declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
abstract class TransformService implements javax.xml.crypto.dsig.Transform {
    protected constructor()
    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.crypto.dsig.TransformService
    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.Provider): javax.xml.crypto.dsig.TransformService
    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.crypto.dsig.TransformService
    public getMechanismType(): string
    public getAlgorithm(): string
    public getProvider(): java.security.Provider
    public init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
    public marshalParams(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
    public init(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$Lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}