declare namespace sun {
    namespace awt {
        namespace X11 {
            class XTrayIconPeer implements java.awt.peer.TrayIconPeer , sun.awt.X11.InfoWindow$Balloon$LiveArguments , sun.awt.X11.InfoWindow$Tooltip$LiveArguments {
                public dispose(): void
                public static suppressWarningString(arg0: java.awt.Window): void
                public setToolTip(arg0: java.lang.String | string): void
                public getTooltipString(): string
                public updateImage(): void
                public displayMessage(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                public showPopupMenu(arg0: int, arg1: int): void
                public getBounds(): java.awt.Rectangle
                public isDisposed(): boolean
                public getActionCommand(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}