declare namespace sun {
    namespace applet {
        class AppletEventMulticaster implements sun.applet.AppletListener {
            public constructor(arg0: sun.applet.AppletListener | sun.applet.AppletListener$$Lambda, arg1: sun.applet.AppletListener | sun.applet.AppletListener$$Lambda)
            public appletStateChanged(arg0: sun.applet.AppletEvent): void
            public static add(arg0: sun.applet.AppletListener | sun.applet.AppletListener$$Lambda, arg1: sun.applet.AppletListener | sun.applet.AppletListener$$Lambda): sun.applet.AppletListener
            public static remove(arg0: sun.applet.AppletListener | sun.applet.AppletListener$$Lambda, arg1: sun.applet.AppletListener | sun.applet.AppletListener$$Lambda): sun.applet.AppletListener
            protected remove(arg0: sun.applet.AppletListener | sun.applet.AppletListener$$Lambda): sun.applet.AppletListener
            public static class: java.lang.Class<any>
        }
    }
}