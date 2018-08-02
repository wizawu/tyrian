declare namespace java {
    namespace net {
abstract class CookieHandler {
    public constructor()
    public static getDefault(): java.net.CookieHandler
    public static setDefault(arg0: java.net.CookieHandler): void
    public get(arg0: java.net.URI, arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public put(arg0: java.net.URI, arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
    public static class: java.lang.Class<any>
}

    }
}