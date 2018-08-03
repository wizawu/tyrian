declare namespace java {
    namespace net {
        abstract class ContentHandler {
            public constructor()
            public abstract getContent(arg0: java.net.URLConnection | java.net.URLConnection$$Lambda): java.lang.Object
            public getContent(arg0: java.net.URLConnection | java.net.URLConnection$$Lambda, arg1: java.lang.Class[]): java.lang.Object
            public static class: java.lang.Class<any>
        }
        interface ContentHandler$$Lambda {
            (arg0: java.net.URLConnection | java.net.URLConnection$$Lambda): java.lang.Object
        }
    }
}