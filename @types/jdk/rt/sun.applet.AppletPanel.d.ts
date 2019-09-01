declare namespace sun {
    namespace applet {
        abstract class AppletPanel extends java.awt.Panel implements java.applet.AppletStub , java.lang.Runnable {
            protected applet: java.applet.Applet
            protected doInit: boolean
            protected loader: sun.applet.AppletClassLoader
            public static readonly APPLET_DISPOSE: int
            public static readonly APPLET_LOAD: int
            public static readonly APPLET_INIT: int
            public static readonly APPLET_START: int
            public static readonly APPLET_STOP: int
            public static readonly APPLET_DESTROY: int
            public static readonly APPLET_QUIT: int
            public static readonly APPLET_ERROR: int
            public static readonly APPLET_RESIZE: int
            public static readonly APPLET_LOADING: int
            public static readonly APPLET_LOADING_COMPLETED: int
            protected status: int
            protected handler: java.lang.Thread
            public constructor()
            protected abstract getCode(): string
            protected abstract getJarFiles(): string
            protected abstract getSerializedObject(): string
            public abstract getWidth(): int
            public abstract getHeight(): int
            public abstract hasInitialFocus(): boolean
            protected setupAppletAppContext(): void
            protected createAppletThread(): void
            public init(): void
            public minimumSize(): java.awt.Dimension
            public preferredSize(): java.awt.Dimension
            public addAppletListener(arg0: sun.applet.AppletListener): void
            public removeAppletListener(arg0: sun.applet.AppletListener): void
            public dispatchAppletEvent(arg0: int, arg1: java.lang.Object): void
            public sendEvent(arg0: int): void
            protected getNextEvent(): sun.applet.AppletEvent
            public run(): void
            protected runLoader(): void
            protected createApplet(arg0: sun.applet.AppletClassLoader): java.applet.Applet
            protected loadJarFiles(arg0: sun.applet.AppletClassLoader): void
            protected stopLoading(): void
            protected okToLoad(): boolean
            protected clearLoadAbortRequest(): void
            protected setLoadAbortRequest(): void
            public isActive(): boolean
            public appletResize(arg0: int, arg1: int): void
            public setBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
            public getApplet(): java.applet.Applet
            protected showAppletStatus(arg0: java.lang.String | string): void
            protected showAppletStatus(arg0: java.lang.String | string, arg1: java.lang.Object): void
            protected showAppletStatus(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            protected showAppletLog(arg0: java.lang.String | string): void
            protected showAppletLog(arg0: java.lang.String | string, arg1: java.lang.Object): void
            protected showAppletException(arg0: java.lang.Throwable): void
            public getClassLoaderCacheKey(): string
            public static flushClassLoader(arg0: java.lang.String | string): void
            public static flushClassLoaders(): void
            protected createClassLoader(arg0: java.net.URL): sun.applet.AppletClassLoader
            public getAppletHandlerThread(): java.lang.Thread
            public getAppletWidth(): int
            public getAppletHeight(): int
            public static changeFrameAppContext(arg0: java.awt.Frame, arg1: sun.awt.AppContext): void
            protected isJDK11Applet(): boolean
            protected isJDK12Applet(): boolean
            public static class: java.lang.Class<any>
        }
    }
}