declare namespace sun {
    namespace awt {
        namespace X11 {
class XCheckboxPeer extends sun.awt.X11.XComponentPeer implements java.awt.peer.CheckboxPeer {
    public preInit(arg0: sun.awt.X11.XCreateWindowParams): void
    public isFocusable(): boolean
    public focusGained(arg0: java.awt.event.FocusEvent): void
    public focusLost(arg0: java.awt.event.FocusEvent): void
    public keyTyped(arg0: java.awt.event.KeyEvent): void
    public keyPressed(arg0: java.awt.event.KeyEvent): void
    public keyReleased(arg0: java.awt.event.KeyEvent): void
    public setLabel(arg0: java.lang.String | string): void
    public mousePressed(arg0: java.awt.event.MouseEvent): void
    public mouseReleased(arg0: java.awt.event.MouseEvent): void
    public mouseEntered(arg0: java.awt.event.MouseEvent): void
    public mouseExited(arg0: java.awt.event.MouseEvent): void
    public mouseClicked(arg0: java.awt.event.MouseEvent): void
    public getMinimumSize(): java.awt.Dimension
    public setBackground(arg0: java.awt.Color): void
    public layout(): void
    public paintCheckbox(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): void
    public paintRadioButton(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): void
    protected paintText(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.lang.String | string): void
    protected paintFocus(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): void
    public setState(arg0: boolean): void
    public setCheckboxGroup(arg0: java.awt.CheckboxGroup): void
    public static class: java.lang.Class<any>
}

        }
    }
}