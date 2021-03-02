declare namespace java {
  namespace net {

    abstract class CacheResponse {
      public constructor()
      public abstract getHeaders(): java.util.Map<java.lang.String,java.util.List<java.lang.String>>
      public abstract getBody(): java.io.InputStream
    }

  }
}
