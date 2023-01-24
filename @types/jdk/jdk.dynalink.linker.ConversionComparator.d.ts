declare namespace jdk {
  namespace dynalink {
    namespace linker {
      interface ConversionComparator$$lambda {
        (
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.Class<unknown>
        ): jdk.dynalink.linker.ConversionComparator$Comparison
      }

      interface ConversionComparator {
        compareConversion(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.Class<unknown>
        ): jdk.dynalink.linker.ConversionComparator$Comparison
      }
    }
  }
}
