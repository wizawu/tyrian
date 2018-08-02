declare namespace sun {
    namespace awt {
        namespace X11 {
class XDropTargetContextPeer extends sun.awt.dnd.SunDropTargetContextPeer {
    protected eventProcessed(arg0: sun.awt.dnd.SunDropTargetEvent, arg1: int, arg2: boolean): void
    protected doDropDone(arg0: boolean, arg1: int, arg2: boolean): void
    protected getNativeData(arg0: long): java.lang.Object
    protected processEnterMessage(arg0: sun.awt.dnd.SunDropTargetEvent): void
    protected processExitMessage(arg0: sun.awt.dnd.SunDropTargetEvent): void
    protected processMotionMessage(arg0: sun.awt.dnd.SunDropTargetEvent, arg1: boolean): void
    protected processDropMessage(arg0: sun.awt.dnd.SunDropTargetEvent): void
    public forwardEventToEmbedded(arg0: long, arg1: long, arg2: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}