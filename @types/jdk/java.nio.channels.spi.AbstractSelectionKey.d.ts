declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {

        abstract class AbstractSelectionKey extends java.nio.channels.SelectionKey {

          protected constructor()
          public readonly isValid(): boolean
          invalidate(): void
          public readonly cancel(): void
        }

      }
    }
  }
}
