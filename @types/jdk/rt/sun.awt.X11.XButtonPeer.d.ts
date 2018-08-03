declare namespace sun {
    namespace awt {
        namespace X11 {
            class XButtonPeer extends sun.awt.X11.XComponentPeer implements java.awt.peer.ButtonPeer {
                protected focusColor: java.awt.Color
                protected getPropertyPrefix(): string
                public constructor(arg0: java.awt.Button)
                public dispose(): void
                public isFocusable(): boolean
                public setLabel(arg0: java.lang.String | string): void
                public setBackground(arg0: java.awt.Color): void
                public action(arg0: long, arg1: int): void
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public getMinimumSize(): java.awt.Dimension
                public minimumSize(): java.awt.Dimension
                public paintBorder(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): void
                protected paintFocus(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): void
                protected paintButtonPressed(arg0: java.awt.Graphics, arg1: java.awt.Component): void
                protected paintText(arg0: java.awt.Graphics, arg1: java.awt.Component, arg2: java.awt.Rectangle, arg3: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
    }
}