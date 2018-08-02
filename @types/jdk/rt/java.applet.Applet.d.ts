declare namespace java {
    namespace applet {
class Applet extends java.awt.Panel {
    public constructor()
    public setStub(arg0: java.applet.AppletStub): void
    public isActive(): boolean
    public getDocumentBase(): java.net.URL
    public getCodeBase(): java.net.URL
    public getParameter(arg0: java.lang.String | string): string
    public getAppletContext(): java.applet.AppletContext
    public resize(arg0: int, arg1: int): void
    public resize(arg0: java.awt.Dimension): void
    public isValidateRoot(): boolean
    public showStatus(arg0: java.lang.String | string): void
    public getImage(arg0: java.net.URL): java.awt.Image
    public getImage(arg0: java.net.URL, arg1: java.lang.String | string): java.awt.Image
    public static newAudioClip(arg0: java.net.URL): java.applet.AudioClip
    public getAudioClip(arg0: java.net.URL): java.applet.AudioClip
    public getAudioClip(arg0: java.net.URL, arg1: java.lang.String | string): java.applet.AudioClip
    public getAppletInfo(): string
    public getLocale(): java.util.Locale
    public getParameterInfo(): java.lang.String[][]
    public play(arg0: java.net.URL): void
    public play(arg0: java.net.URL, arg1: java.lang.String | string): void
    public init(): void
    public start(): void
    public stop(): void
    public destroy(): void
    public getAccessibleContext(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

    }
}