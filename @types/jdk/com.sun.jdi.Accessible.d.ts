declare namespace com {
  namespace sun {
    namespace jdi {

      interface Accessible {
        modifiers(): int
        isPrivate(): boolean
        isPackagePrivate(): boolean
        isProtected(): boolean
        isPublic(): boolean
      }

    }
  }
}
