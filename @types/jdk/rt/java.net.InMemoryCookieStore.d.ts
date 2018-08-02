declare namespace java {
    namespace net {
class InMemoryCookieStore implements java.net.CookieStore {
    public constructor()
    public add(arg0: java.net.URI, arg1: java.net.HttpCookie): void
    public get(arg0: java.net.URI): java.util.List<java.net.HttpCookie>
    public getCookies(): java.util.List<java.net.HttpCookie>
    public getURIs(): java.util.List<java.net.URI>
    public remove(arg0: java.net.URI, arg1: java.net.HttpCookie): boolean
    public removeAll(): boolean
    public static class: java.lang.Class<any>
}

    }
}