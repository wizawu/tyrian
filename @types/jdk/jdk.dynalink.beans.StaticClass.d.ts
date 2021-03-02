declare namespace jdk {
  namespace dynalink {
    namespace beans {

      class StaticClass implements java.io.Serializable {
        constructor(arg0: java.lang.Class<unknown>)
        public static forClass(arg0: java.lang.Class<unknown>): jdk.dynalink.beans.StaticClass
        public getRepresentedClass(): java.lang.Class<unknown>
        public toString(): java.lang.String
      }

    }
  }
}
