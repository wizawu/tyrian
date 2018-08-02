declare namespace sun {
    namespace awt {
        namespace X11 {
class XTextAreaPeer extends sun.awt.X11.XComponentPeer implements java.awt.peer.TextAreaPeer {
    public dispose(): void
    public pSetCursor(arg0: java.awt.Cursor, arg1: boolean): void
    public getMinimumSize(): java.awt.Dimension
    public getPreferredSize(arg0: int, arg1: int): java.awt.Dimension
    public getMinimumSize(arg0: int, arg1: int): java.awt.Dimension
    public isFocusable(): boolean
    public setVisible(arg0: boolean): void
    public focusGained(arg0: java.awt.event.FocusEvent): void
    public focusLost(arg0: java.awt.event.FocusEvent): void
    public repaint(): void
    public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
    public handlesWheelScrolling(): boolean
    public handleJavaMouseEvent(arg0: java.awt.event.MouseEvent): void
    public select(arg0: int, arg1: int): void
    public setBackground(arg0: java.awt.Color): void
    public setForeground(arg0: java.awt.Color): void
    public setFont(arg0: java.awt.Font): void
    public setEditable(arg0: boolean): void
    public setEnabled(arg0: boolean): void
    public getInputMethodRequests(): java.awt.im.InputMethodRequests
    public getSelectionStart(): int
    public getSelectionEnd(): int
    public getText(): string
    public setText(arg0: java.lang.String | string): void
    public insert(arg0: java.lang.String | string, arg1: int): void
    public replaceRange(arg0: java.lang.String | string, arg1: int, arg2: int): void
    public setCaretPosition(arg0: int): void
    public getCaretPosition(): int
    public static class: java.lang.Class<any>
}

        }
    }
}