declare namespace java {
  namespace beans {
    interface Visibility {
      needsGui(): boolean
      dontUseGui(): void
      okToUseGui(): void
      avoidingGui(): boolean
    }
  }
}
