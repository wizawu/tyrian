declare namespace sun {
    namespace awt {
        namespace X11 {
class XInputMethod extends sun.awt.X11InputMethod {
    public constructor()
    public setInputMethodContext(arg0: java.awt.im.spi.InputMethodContext): void
    public notifyClientWindowChange(arg0: java.awt.Rectangle): void
    protected openXIM(): boolean
    protected createXIC(): boolean
    protected setXICFocus(arg0: java.awt.peer.ComponentPeer, arg1: boolean, arg2: boolean): void
    public static getXICFocus(): long
    protected getParent(arg0: java.awt.Component): java.awt.Container
    protected getPeer(arg0: java.awt.Component): java.awt.peer.ComponentPeer
    protected disposeImpl(): void
    protected awtLock(): void
    protected awtUnlock(): void
    public static class: java.lang.Class<any>
}

        }
    }
}