declare namespace javax {
  namespace security {
    namespace auth {

      interface Refreshable {
        isCurrent(): boolean
        refresh(): void
      }

    }
  }
}
