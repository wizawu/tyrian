declare namespace java {
    namespace applet {
        interface AppletContext {
            getAudioClip(arg0: java.net.URL): java.applet.AudioClip
            getImage(arg0: java.net.URL): java.awt.Image
            getApplet(arg0: java.lang.String | string): java.applet.Applet
            getApplets(): java.util.Enumeration<java.applet.Applet>
            showDocument(arg0: java.net.URL): void
            showDocument(arg0: java.net.URL, arg1: java.lang.String | string): void
            showStatus(arg0: java.lang.String | string): void
            setStream(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): void
            getStream(arg0: java.lang.String | string): java.io.InputStream
            getStreamKeys(): java.util.Iterator<java.lang.String>
        }
    }
}