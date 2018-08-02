declare namespace javax {
    namespace swing {
        namespace event {
class AncestorEvent extends java.awt.AWTEvent {
    public static ANCESTOR_ADDED: int
    public static ANCESTOR_REMOVED: int
    public static ANCESTOR_MOVED: int
    public constructor(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: java.awt.Container, arg3: java.awt.Container)
    public getAncestor(): java.awt.Container
    public getAncestorParent(): java.awt.Container
    public getComponent(): javax.swing.JComponent
    public static class: java.lang.Class<any>
}

        }
    }
}