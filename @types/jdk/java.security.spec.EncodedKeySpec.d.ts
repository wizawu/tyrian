declare namespace java {
  namespace security {
    namespace spec {
      abstract class EncodedKeySpec implements java.security.spec.KeySpec {
        public constructor(arg0: number[] | java.lang.Byte[])
        protected constructor(arg0: number[] | java.lang.Byte[], arg1: java.lang.String | string)
        public getAlgorithm(): java.lang.String
        public getEncoded(): number[]
        public abstract getFormat(): java.lang.String
      }
    }
  }
}
