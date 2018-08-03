declare namespace sun {
    namespace awt {
        namespace X11 {
            abstract class XDropTargetProtocol {
                public static readonly EMBEDDER_ALREADY_REGISTERED: int
                public static readonly UNKNOWN_MESSAGE: int
                public static readonly ENTER_MESSAGE: int
                public static readonly MOTION_MESSAGE: int
                public static readonly LEAVE_MESSAGE: int
                public static readonly DROP_MESSAGE: int
                protected constructor(arg0: sun.awt.X11.XDropTargetProtocolListener | sun.awt.X11.XDropTargetProtocolListener$$Lambda)
                protected getProtocolListener(): sun.awt.X11.XDropTargetProtocolListener
                public abstract getProtocolName(): string
                public abstract registerDropTarget(arg0: long): void
                public abstract unregisterDropTarget(arg0: long): void
                public abstract registerEmbedderDropSite(arg0: long): void
                public abstract unregisterEmbedderDropSite(arg0: long): void
                public abstract registerEmbeddedDropSite(arg0: long): void
                public unregisterEmbeddedDropSite(arg0: long): void
                public abstract isProtocolSupported(arg0: long): boolean
                public abstract getMessageType(arg0: sun.awt.X11.XClientMessageEvent): int
                public processClientMessage(arg0: sun.awt.X11.XClientMessageEvent): boolean
                protected abstract processClientMessageImpl(arg0: sun.awt.X11.XClientMessageEvent): boolean
                protected forwardClientMessageToToplevel(arg0: long, arg1: sun.awt.X11.XClientMessageEvent): boolean
                protected abstract sendEnterMessageToToplevel(arg0: long, arg1: sun.awt.X11.XClientMessageEvent): void
                protected abstract sendLeaveMessageToToplevel(arg0: long, arg1: sun.awt.X11.XClientMessageEvent): void
                public abstract sendResponse(arg0: long, arg1: int, arg2: int): boolean
                public abstract getData(arg0: long, arg1: long): java.lang.Object
                public abstract sendDropDone(arg0: long, arg1: boolean, arg2: int): boolean
                public abstract getSourceWindow(): long
                public abstract cleanup(): void
                public abstract isDragOverComponent(): boolean
                public adjustEventForForwarding(arg0: sun.awt.X11.XClientMessageEvent, arg1: sun.awt.X11.XDropTargetProtocol$EmbedderRegistryEntry): void
                public abstract forwardEventToEmbedded(arg0: long, arg1: long, arg2: int): boolean
                public abstract isXEmbedSupported(): boolean
                protected putEmbedderRegistryEntry(arg0: long, arg1: boolean, arg2: int, arg3: long): void
                protected getEmbedderRegistryEntry(arg0: long): sun.awt.X11.XDropTargetProtocol$EmbedderRegistryEntry
                protected removeEmbedderRegistryEntry(arg0: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}