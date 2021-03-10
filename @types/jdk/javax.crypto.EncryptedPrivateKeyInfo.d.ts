declare namespace javax {
  namespace crypto {

    class EncryptedPrivateKeyInfo {
      public constructor(arg0: number[] | java.lang.Byte[])
      public constructor(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[])
      public constructor(arg0: java.security.AlgorithmParameters, arg1: number[] | java.lang.Byte[])
      public getAlgName(): java.lang.String
      public getAlgParameters(): java.security.AlgorithmParameters
      public getEncryptedData(): number[]
      public getKeySpec(arg0: javax.crypto.Cipher): java.security.spec.PKCS8EncodedKeySpec
      public getKeySpec(arg0: java.security.Key): java.security.spec.PKCS8EncodedKeySpec
      public getKeySpec(arg0: java.security.Key, arg1: java.lang.String | string): java.security.spec.PKCS8EncodedKeySpec
      public getKeySpec(arg0: java.security.Key, arg1: java.security.Provider): java.security.spec.PKCS8EncodedKeySpec
      public getEncoded(): number[]
    }

  }
}
