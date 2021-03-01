declare namespace java {
  namespace security {

    interface AlgorithmConstraints {

      permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.lang.String, arg2: java.security.AlgorithmParameters): boolean
      permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.security.Key): boolean
      permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.lang.String, arg2: java.security.Key, arg3: java.security.AlgorithmParameters): boolean
    }

  }
}
