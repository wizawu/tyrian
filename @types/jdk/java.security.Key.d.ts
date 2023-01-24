declare namespace java {
  namespace security {
    interface Key extends java.io.Serializable {
      readonly serialVersionUID: long
      getAlgorithm(): java.lang.String
      getFormat(): java.lang.String
      getEncoded(): number[]
    }
  }
}
