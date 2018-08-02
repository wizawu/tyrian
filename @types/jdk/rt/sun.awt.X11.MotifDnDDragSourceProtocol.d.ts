declare namespace sun {
    namespace awt {
        namespace X11 {
class MotifDnDDragSourceProtocol extends sun.awt.X11.XDragSourceProtocol implements sun.awt.X11.XEventDispatcher {
    protected constructor(arg0: sun.awt.X11.XDragSourceProtocolListener)
    public getProtocolName(): string
    protected initializeDragImpl(arg0: int, arg1: java.awt.datatransfer.Transferable, arg2: java.util.Map, arg3: long[]): void
    public processClientMessage(arg0: sun.awt.X11.XClientMessageEvent): boolean
    public getTargetWindowInfo(arg0: long): sun.awt.X11.XDragSourceProtocol$TargetWindowInfo
    public sendEnterMessage(arg0: long[], arg1: int, arg2: int, arg3: long): void
    public sendMoveMessage(arg0: int, arg1: int, arg2: int, arg3: int, arg4: long): void
    public sendLeaveMessage(arg0: long): void
    protected sendDropMessage(arg0: int, arg1: int, arg2: int, arg3: int, arg4: long): void
    public processProxyModeEvent(arg0: sun.awt.X11.XClientMessageEvent, arg1: long): boolean
    public cleanupTargetInfo(): void
    public dispatchEvent(arg0: sun.awt.X11.XEvent): void
    public static class: java.lang.Class<any>
}

class MotifDnDDragSourceProtocol$$Lambda extends sun.awt.X11.XDragSourceProtocol implements sun.awt.X11.XEventDispatcher {
    protected constructor(arg0: sun.awt.X11.XDragSourceProtocolListener)
}

        }
    }
}