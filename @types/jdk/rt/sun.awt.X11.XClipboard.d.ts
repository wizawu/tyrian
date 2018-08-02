declare namespace sun {
    namespace awt {
        namespace X11 {
class XClipboard extends sun.awt.datatransfer.SunClipboard implements sun.awt.X11.OwnershipListener {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public ownershipChanged(arg0: boolean): void
    protected setContentsNative(arg0: java.awt.datatransfer.Transferable): void
    public getID(): long
    public getContents(arg0: java.lang.Object): java.awt.datatransfer.Transferable
    protected clearNativeContext(): void
    protected getClipboardFormats(): long[]
    protected getClipboardData(arg0: long): byte[]
    protected registerClipboardViewerChecked(): void
    protected unregisterClipboardViewerChecked(): void
    public static class: java.lang.Class<any>
}

class XClipboard$$Lambda extends sun.awt.datatransfer.SunClipboard implements sun.awt.X11.OwnershipListener {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
}

        }
    }
}