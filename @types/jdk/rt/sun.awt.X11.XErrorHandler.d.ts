declare namespace sun {
    namespace awt {
        namespace X11 {
            abstract class XErrorHandler {
                public constructor()
                public abstract handleError(arg0: long, arg1: sun.awt.X11.XErrorEvent): int
                public static class: java.lang.Class<any>
            }
            interface XErrorHandler$$Lambda {
                (arg0: long, arg1: sun.awt.X11.XErrorEvent): int
            }
        }
    }
}