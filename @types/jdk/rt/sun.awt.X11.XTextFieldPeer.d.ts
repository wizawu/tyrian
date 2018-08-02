declare namespace sun {
    namespace awt {
        namespace X11 {
            class XTextFieldPeer extends sun.awt.X11.XComponentPeer implements java.awt.peer.TextFieldPeer {
                public dispose(): void
                public setEditable(arg0: boolean): void
                public setEnabled(arg0: boolean): void
                public getInputMethodRequests(): java.awt.im.InputMethodRequests
                public setEchoChar(arg0: char): void
                public getSelectionStart(): int
                public getSelectionEnd(): int
                public getText(): string
                public setText(arg0: java.lang.String | string): void
                public setCaretPosition(arg0: int): void
                public setBackground(arg0: java.awt.Color): void
                public setForeground(arg0: java.awt.Color): void
                public setFont(arg0: java.awt.Font): void
                public deselect(): void
                public getCaretPosition(): int
                public select(arg0: int, arg1: int): void
                public getMinimumSize(): java.awt.Dimension
                public getPreferredSize(): java.awt.Dimension
                public getPreferredSize(arg0: int): java.awt.Dimension
                public getMinimumSize(arg0: int): java.awt.Dimension
                public isFocusable(): boolean
                public action(arg0: long, arg1: int): void
                protected disposeImpl(): void
                public repaint(): void
                public print(arg0: java.awt.Graphics): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public handleJavaMouseEvent(arg0: java.awt.event.MouseEvent): void
                public minimumSize(): java.awt.Dimension
                public setVisible(arg0: boolean): void
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}