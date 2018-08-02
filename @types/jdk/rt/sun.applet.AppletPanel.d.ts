declare namespace sun {
    namespace applet {
abstract class AppletPanel extends java.awt.Panel implements java.applet.AppletStub , java.lang.Runnable {
    protected doInit: boolean
    protected loader: sun.applet.AppletClassLoader
    public static APPLET_DISPOSE: int
    public static APPLET_LOAD: int
    public static APPLET_INIT: int
    public static APPLET_START: int
    public static APPLET_STOP: int
    public static APPLET_DESTROY: int
    public static APPLET_QUIT: int
    public static APPLET_ERROR: int
    public static APPLET_RESIZE: int
    public static APPLET_LOADING: int
    public static APPLET_LOADING_COMPLETED: int
    protected status: int
    protected handler: java.lang.Thread
    public constructor()
    protected getCode(): string
    protected getJarFiles(): string
    protected getSerializedObject(): string
    public getWidth(): int
    public getHeight(): int
    public hasInitialFocus(): boolean
    protected setupAppletAppContext(): void
    public init(): void
    public minimumSize(): java.awt.Dimension
    public preferredSize(): java.awt.Dimension
    public addAppletListener(arg0: sun.applet.AppletListener): void
    public removeAppletListener(arg0: sun.applet.AppletListener): void
    public dispatchAppletEvent(arg0: int, arg1: java.lang.Object): void
    public sendEvent(arg0: int): void
    public run(): void
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

abstract class AppletPanel$$Lambda extends java.awt.Panel implements java.applet.AppletStub , java.lang.Runnable {
    protected doInit: boolean
}

    }
}