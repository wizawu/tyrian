declare namespace sun {
    namespace awt {
        namespace X11 {
            class XChoicePeer extends sun.awt.X11.XComponentPeer implements java.awt.peer.ChoicePeer , sun.awt.X11.ToplevelStateListener {
                public static TEXT_SPACE: int
                public static BORDER_WIDTH: int
                public static ITEM_MARGIN: int
                public static SCROLLBAR_WIDTH: int
                public isFocusable(): boolean
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public setEnabled(arg0: boolean): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public keyPressed(arg0: java.awt.event.KeyEvent): void
                public handlesWheelScrolling(): boolean
                public mousePressed(arg0: java.awt.event.MouseEvent): void
                public mouseReleased(arg0: java.awt.event.MouseEvent): void
                public mouseDragged(arg0: java.awt.event.MouseEvent): void
                public getMinimumSize(): java.awt.Dimension
                public layout(): void
                protected paintFocus(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): void
                public select(arg0: int): void
                public add(arg0: java.lang.String | string, arg1: int): void
                public remove(arg0: int): void
                public removeAll(): void
                public addItem(arg0: java.lang.String | string, arg1: int): void
                public setFont(arg0: java.awt.Font): void
                public setForeground(arg0: java.awt.Color): void
                public setBackground(arg0: java.awt.Color): void
                public setDrawSelectedItem(arg0: boolean): void
                public setAlignUnder(arg0: java.awt.Component): void
                public addXChoicePeerListener(arg0: sun.awt.X11.XChoicePeerListener): void
                public removeXChoicePeerListener(): void
                public isUnfurled(): boolean
                public stateChangedICCCM(arg0: int, arg1: int): void
                public stateChangedJava(arg0: int, arg1: int): void
                public dispose(): void
                public handleMouseEventByChoice(arg0: java.awt.event.MouseEvent): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}