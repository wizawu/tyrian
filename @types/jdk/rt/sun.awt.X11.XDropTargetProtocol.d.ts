declare namespace sun {
    namespace awt {
        namespace X11 {
            abstract class XDropTargetProtocol {
                public static EMBEDDER_ALREADY_REGISTERED: int
                public static UNKNOWN_MESSAGE: int
                public static ENTER_MESSAGE: int
                public static MOTION_MESSAGE: int
                public static LEAVE_MESSAGE: int
                public static DROP_MESSAGE: int
                protected constructor(arg0: sun.awt.X11.XDropTargetProtocolListener | sun.awt.X11.XDropTargetProtocolListener$$Lambda)
                protected getProtocolListener(): sun.awt.X11.XDropTargetProtocolListener
                public getProtocolName(): string
                public registerDropTarget(arg0: long): void
                public unregisterDropTarget(arg0: long): void
                public registerEmbedderDropSite(arg0: long): void
                public unregisterEmbedderDropSite(arg0: long): void
                public registerEmbeddedDropSite(arg0: long): void
                public unregisterEmbeddedDropSite(arg0: long): void
                public isProtocolSupported(arg0: long): boolean
                public getMessageType(arg0: sun.awt.X11.XClientMessageEvent): int
                public processClientMessage(arg0: sun.awt.X11.XClientMessageEvent): boolean
                protected processClientMessageImpl(arg0: sun.awt.X11.XClientMessageEvent): boolean
                protected forwardClientMessageToToplevel(arg0: long, arg1: sun.awt.X11.XClientMessageEvent): boolean
                protected sendEnterMessageToToplevel(arg0: long, arg1: sun.awt.X11.XClientMessageEvent): void
                protected sendLeaveMessageToToplevel(arg0: long, arg1: sun.awt.X11.XClientMessageEvent): void
                public sendResponse(arg0: long, arg1: int, arg2: int): boolean
                public getData(arg0: long, arg1: long): java.lang.Object
                public sendDropDone(arg0: long, arg1: boolean, arg2: int): boolean
                public getSourceWindow(): long
                public cleanup(): void
                public isDragOverComponent(): boolean
                public adjustEventForForwarding(arg0: sun.awt.X11.XClientMessageEvent, arg1: sun.awt.X11.XDropTargetProtocol$EmbedderRegistryEntry): void
                public forwardEventToEmbedded(arg0: long, arg1: long, arg2: int): boolean
                public isXEmbedSupported(): boolean
                protected putEmbedderRegistryEntry(arg0: long, arg1: boolean, arg2: int, arg3: long): void
                protected getEmbedderRegistryEntry(arg0: long): sun.awt.X11.XDropTargetProtocol$EmbedderRegistryEntry
                protected removeEmbedderRegistryEntry(arg0: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}