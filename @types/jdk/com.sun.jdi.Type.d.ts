declare namespace com {
  namespace sun {
    namespace jdi {
      interface Type extends com.sun.jdi.Mirror {
        signature(): java.lang.String
        name(): java.lang.String
      }
    }
  }
}
