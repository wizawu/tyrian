declare namespace java {
    namespace beans {
        class BeansAppletStub implements java.applet.AppletStub {
            public isActive(): boolean
            public getDocumentBase(): java.net.URL
            public getCodeBase(): java.net.URL
            public getParameter(arg0: java.lang.String | string): string
            public getAppletContext(): java.applet.AppletContext
            public appletResize(arg0: int, arg1: int): void
            public static class: java.lang.Class<any>
        }
    }
}