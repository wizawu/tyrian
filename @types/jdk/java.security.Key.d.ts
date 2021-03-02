declare namespace java {
  namespace security {

    interface Key extends java.io.Serializable {
      public static readonly serialVersionUID: long
      getAlgorithm(): java.lang.String
      getFormat(): java.lang.String
      getEncoded(): byte[]
    }

  }
}
