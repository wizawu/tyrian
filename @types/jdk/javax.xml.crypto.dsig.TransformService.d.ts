declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        abstract class TransformService implements javax.xml.crypto.dsig.Transform {
          protected constructor()
          public static getInstance(
            arg0: java.lang.String | string,
            arg1: java.lang.String | string
          ): javax.xml.crypto.dsig.TransformService
          public static getInstance(
            arg0: java.lang.String | string,
            arg1: java.lang.String | string,
            arg2: java.security.Provider
          ): javax.xml.crypto.dsig.TransformService
          public static getInstance(
            arg0: java.lang.String | string,
            arg1: java.lang.String | string,
            arg2: java.lang.String | string
          ): javax.xml.crypto.dsig.TransformService
          public getMechanismType(): java.lang.String
          public getAlgorithm(): java.lang.String
          public getProvider(): java.security.Provider
          public abstract init(arg0: javax.xml.crypto.dsig.spec.TransformParameterSpec): void
          public abstract marshalParams(
            arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$lambda,
            arg1: javax.xml.crypto.XMLCryptoContext
          ): void
          public abstract init(
            arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$lambda,
            arg1: javax.xml.crypto.XMLCryptoContext
          ): void
        }
      }
    }
  }
}
