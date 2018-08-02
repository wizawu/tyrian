declare namespace java {
    namespace beans {
        class BeansAppletContext implements java.applet.AppletContext {
            public getAudioClip(arg0: java.net.URL): java.applet.AudioClip
            public getImage(arg0: java.net.URL): java.awt.Image
            public getApplet(arg0: java.lang.String | string): java.applet.Applet
            public getApplets(): java.util.Enumeration<java.applet.Applet>
            public showDocument(arg0: java.net.URL): void
            public showDocument(arg0: java.net.URL, arg1: java.lang.String | string): void
            public showStatus(arg0: java.lang.String | string): void
            public setStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            public getStream(arg0: java.lang.String | string): java.io.InputStream
            public getStreamKeys(): java.util.Iterator<java.lang.String>
            public static class: java.lang.Class<any>
        }
    }
}