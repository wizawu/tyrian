declare namespace java {
  namespace nio {
    namespace channels {

      interface InterruptibleChannel extends java.nio.channels.Channel {
        close(): void
      }

    }
  }
}
