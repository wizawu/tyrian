declare namespace java {
  namespace net {

    abstract class CacheRequest {

      public constructor()
      public abstract getBody(): java.io.OutputStream
      public abstract abort(): void
    }

  }
}
