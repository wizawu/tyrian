declare namespace sun {
    namespace applet {
        class AppletViewerPanel extends sun.applet.AppletPanel {
            protected static debug: boolean
            protected documentURL: java.net.URL
            protected baseURL: java.net.URL
            protected atts: java.util.Hashtable<java.lang.String, java.lang.String>
            protected constructor(arg0: java.net.URL, arg1: java.util.Hashtable<java.lang.String, java.lang.String>)
            public getParameter(arg0: java.lang.String | string): string
            public getDocumentBase(): java.net.URL
            public getCodeBase(): java.net.URL
            public getWidth(): int
            public getHeight(): int
            public hasInitialFocus(): boolean
            public getCode(): string
            public getJarFiles(): string
            public getSerializedObject(): string
            public getAppletContext(): java.applet.AppletContext
            protected static debug(arg0: java.lang.String | string): void
            protected static debug(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
            public static class: java.lang.Class<any>
        }
    }
}