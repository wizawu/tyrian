declare namespace javax {
  namespace crypto {

    abstract class CipherSpi {
      public constructor()
      protected abstract engineSetMode(arg0: java.lang.String | string): void
      protected abstract engineSetPadding(arg0: java.lang.String | string): void
      protected abstract engineGetBlockSize(): number
      protected abstract engineGetOutputSize(arg0: number | java.lang.Integer): number
      protected abstract engineGetIV(): number[]
      protected abstract engineGetParameters(): java.security.AlgorithmParameters
      protected abstract engineInit(arg0: number | java.lang.Integer, arg1: java.security.Key, arg2: java.security.SecureRandom): void
      protected abstract engineInit(arg0: number | java.lang.Integer, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
      protected abstract engineInit(arg0: number | java.lang.Integer, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
      protected abstract engineUpdate(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      protected abstract engineUpdate(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number[] | java.lang.Byte[], arg4: number | java.lang.Integer): number
      protected engineUpdate(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): number
      protected abstract engineDoFinal(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
      protected abstract engineDoFinal(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number[] | java.lang.Byte[], arg4: number | java.lang.Integer): number
      protected engineDoFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): number
      static getTempArraySize(arg0: number | java.lang.Integer): number
      protected engineWrap(arg0: java.security.Key): number[]
      protected engineUnwrap(arg0: number[] | java.lang.Byte[], arg1: java.lang.String | string, arg2: number | java.lang.Integer): java.security.Key
      protected engineGetKeySize(arg0: java.security.Key): number
      protected engineUpdateAAD(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      protected engineUpdateAAD(arg0: java.nio.ByteBuffer): void
    }

  }
}
