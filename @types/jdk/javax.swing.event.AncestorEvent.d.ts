declare namespace javax {
  namespace swing {
    namespace event {

      class AncestorEvent extends java.awt.AWTEvent {
        public static readonly ANCESTOR_ADDED: int
        public static readonly ANCESTOR_REMOVED: int
        public static readonly ANCESTOR_MOVED: int
        ancestor: java.awt.Container
        ancestorParent: java.awt.Container
        public constructor(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: java.awt.Container, arg3: java.awt.Container)
        public getAncestor(): java.awt.Container
        public getAncestorParent(): java.awt.Container
        public getComponent(): javax.swing.JComponent
      }

    }
  }
}
