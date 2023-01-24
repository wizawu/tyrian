declare namespace java {
  namespace lang {
    namespace reflect {
      interface Member {
        readonly PUBLIC: int
        readonly DECLARED: int
        getDeclaringClass(): java.lang.Class<unknown>
        getName(): java.lang.String
        getModifiers(): number
        isSynthetic(): boolean
      }
    }
  }
}
