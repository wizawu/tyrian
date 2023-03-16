declare namespace javax {
  namespace security {
    namespace auth {
      interface Destroyable {
        destroy?(): void
        isDestroyed?(): boolean
      }
    }
  }
}
