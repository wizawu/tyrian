declare namespace sun {
    namespace applet {
        class AppletViewer extends java.awt.Frame implements java.applet.AppletContext , java.awt.print.Printable {
            public constructor(arg0: int, arg1: int, arg2: java.net.URL, arg3: java.util.Hashtable, arg4: java.io.PrintStream, arg5: sun.applet.AppletViewerFactory)
            public addMenuItem(arg0: java.awt.Menu | java.awt.Menu$$Lambda, arg1: java.lang.String | string): java.awt.MenuItem
            public getAudioClip(arg0: java.net.URL): java.applet.AudioClip
            public getImage(arg0: java.net.URL): java.awt.Image
            public getApplet(arg0: java.lang.String | string): java.applet.Applet
            public getApplets(): java.util.Enumeration
            public showDocument(arg0: java.net.URL): void
            public showDocument(arg0: java.net.URL, arg1: java.lang.String | string): void
            public showStatus(arg0: java.lang.String | string): void
            public setStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            public getStream(arg0: java.lang.String | string): java.io.InputStream
            public getStreamKeys(): java.util.Iterator
            public static printTag(arg0: java.io.PrintStream, arg1: java.util.Hashtable): void
            public updateAtts(): void
            public print(arg0: java.awt.Graphics, arg1: java.awt.print.PageFormat, arg2: int): int
            public static networkProperties(): void
            protected appletQuit(): void
            public processUserAction(arg0: java.awt.event.ActionEvent): void
            public static countApplets(): int
            public static skipSpace(arg0: java.io.Reader): void
            public static scanIdentifier(arg0: java.io.Reader): string
            public static scanTag(arg0: java.io.Reader): java.util.Hashtable
            public static parse(arg0: java.net.URL, arg1: java.lang.String | string): void
            public static parse(arg0: java.net.URL): void
            public static parse(arg0: java.net.URL, arg1: java.io.PrintStream, arg2: sun.applet.AppletViewerFactory): void
            public static main(arg0: java.lang.String[]): void
            public static class: java.lang.Class<any>
        }
    }
}