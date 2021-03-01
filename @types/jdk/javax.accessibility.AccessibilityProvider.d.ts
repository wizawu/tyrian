declare namespace javax {
  namespace accessibility {

    abstract class AccessibilityProvider {

      protected constructor()
      public abstract getName(): java.lang.String
      public abstract activate(): void
    }

  }
}
