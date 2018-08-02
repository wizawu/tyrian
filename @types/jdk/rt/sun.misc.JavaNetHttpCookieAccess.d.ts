declare namespace sun {
    namespace misc {
        interface JavaNetHttpCookieAccess {
            parse(arg0: java.lang.String | string): java.util.List<java.net.HttpCookie>
            header(arg0: java.net.HttpCookie): string
        }
    }
}