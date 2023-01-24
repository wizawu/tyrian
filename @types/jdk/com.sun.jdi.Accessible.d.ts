declare namespace com {
  namespace sun {
    namespace jdi {
      interface Accessible {
        modifiers(): number
        isPrivate(): boolean
        isPackagePrivate(): boolean
        isProtected(): boolean
        isPublic(): boolean
      }
    }
  }
}
