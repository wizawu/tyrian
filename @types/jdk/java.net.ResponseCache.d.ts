declare namespace java {
  namespace net {
    abstract class ResponseCache {
      public constructor()
      public static getDefault(): java.net.ResponseCache
      public static setDefault(arg0: java.net.ResponseCache): void
      public abstract get(
        arg0: java.net.URI,
        arg1: java.lang.String | string,
        arg2: java.util.Map<java.lang.String, java.util.List<java.lang.String>>
      ): java.net.CacheResponse
      public abstract put(arg0: java.net.URI, arg1: java.net.URLConnection): java.net.CacheRequest
    }
  }
}
