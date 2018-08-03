declare namespace sun {
    namespace awt {
        namespace X11 {
            abstract class XDragSourceProtocol {
                protected constructor(arg0: sun.awt.X11.XDragSourceProtocolListener)
                protected getProtocolListener(): sun.awt.X11.XDragSourceProtocolListener
                public abstract getProtocolName(): string
                public initializeDrag(arg0: int, arg1: java.awt.datatransfer.Transferable, arg2: java.util.Map, arg3: long[]): void
                protected abstract initializeDragImpl(arg0: int, arg1: java.awt.datatransfer.Transferable, arg2: java.util.Map, arg3: long[]): void
                public cleanup(): void
                public cleanupTargetInfo(): void
                public abstract processClientMessage(arg0: sun.awt.X11.XClientMessageEvent): boolean
                public attachTargetWindow(arg0: long, arg1: long): boolean
                public abstract getTargetWindowInfo(arg0: long): sun.awt.X11.XDragSourceProtocol$TargetWindowInfo
                public abstract sendEnterMessage(arg0: long[], arg1: int, arg2: int, arg3: long): void
                public abstract sendMoveMessage(arg0: int, arg1: int, arg2: int, arg3: int, arg4: long): void
                public abstract sendLeaveMessage(arg0: long): void
                protected abstract sendDropMessage(arg0: int, arg1: int, arg2: int, arg3: int, arg4: long): void
                public initiateDrop(arg0: int, arg1: int, arg2: int, arg3: int, arg4: long): void
                protected finalizeDrop(): void
                public abstract processProxyModeEvent(arg0: sun.awt.X11.XClientMessageEvent, arg1: long): boolean
                protected getTargetWindow(): long
                protected getTargetProxyWindow(): long
                protected getTargetProtocolVersion(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}