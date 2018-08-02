declare namespace javax {
    namespace swing {
class KeyboardManager {
    public static getCurrentManager(): javax.swing.KeyboardManager
    public static setCurrentManager(arg0: javax.swing.KeyboardManager): void
    public registerKeyStroke(arg0: javax.swing.KeyStroke, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public unregisterKeyStroke(arg0: javax.swing.KeyStroke, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public fireKeyboardAction(arg0: java.awt.event.KeyEvent, arg1: boolean, arg2: java.awt.Container): boolean
    public registerMenuBar(arg0: javax.swing.JMenuBar): void
    public unregisterMenuBar(arg0: javax.swing.JMenuBar): void
    protected registerNewTopContainer(arg0: java.awt.Container): java.util.Hashtable
    public static class: java.lang.Class<any>
}

    }
}