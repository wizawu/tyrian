declare namespace java {
  namespace lang {
    namespace reflect {

      interface Member {
        public static readonly PUBLIC: int
        public static readonly DECLARED: int
        getDeclaringClass(): java.lang.Class<unknown>
        getName(): java.lang.String
        getModifiers(): number
        isSynthetic(): boolean
      }

    }
  }
}
