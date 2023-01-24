declare namespace java {
  namespace security {
    namespace spec {
      class DSAGenParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        )
        public getPrimePLength(): number
        public getSubprimeQLength(): number
        public getSeedLength(): number
      }
    }
  }
}
