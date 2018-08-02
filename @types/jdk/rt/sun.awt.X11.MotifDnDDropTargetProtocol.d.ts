declare namespace sun {
    namespace awt {
        namespace X11 {
            class MotifDnDDropTargetProtocol extends sun.awt.X11.XDropTargetProtocol {
                protected constructor(arg0: sun.awt.X11.XDropTargetProtocolListener | sun.awt.X11.XDropTargetProtocolListener$$Lambda)
                public getProtocolName(): string
                public registerDropTarget(arg0: long): void
                public unregisterDropTarget(arg0: long): void
                public registerEmbedderDropSite(arg0: long): void
                public unregisterEmbedderDropSite(arg0: long): void
                public registerEmbeddedDropSite(arg0: long): void
                public isProtocolSupported(arg0: long): boolean
                public getMessageType(arg0: sun.awt.X11.XClientMessageEvent): int
                protected processClientMessageImpl(arg0: sun.awt.X11.XClientMessageEvent): boolean
                protected sendEnterMessageToToplevel(arg0: long, arg1: sun.awt.X11.XClientMessageEvent): void
                protected sendLeaveMessageToToplevel(arg0: long, arg1: sun.awt.X11.XClientMessageEvent): void
                public forwardEventToEmbedded(arg0: long, arg1: long, arg2: int): boolean
                public isXEmbedSupported(): boolean
                public sendResponse(arg0: long, arg1: int, arg2: int): boolean
                public getData(arg0: long, arg1: long): java.lang.Object
                public sendDropDone(arg0: long, arg1: boolean, arg2: int): boolean
                public getSourceWindow(): long
                public cleanup(): void
                public isDragOverComponent(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}