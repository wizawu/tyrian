declare namespace javax {
    namespace swing {
        class AncestorNotifier implements java.awt.event.ComponentListener , java.beans.PropertyChangeListener , java.io.Serializable {
            protected fireAncestorAdded(arg0: javax.swing.JComponent, arg1: int, arg2: java.awt.Container, arg3: java.awt.Container): void
            protected fireAncestorRemoved(arg0: javax.swing.JComponent, arg1: int, arg2: java.awt.Container, arg3: java.awt.Container): void
            protected fireAncestorMoved(arg0: javax.swing.JComponent, arg1: int, arg2: java.awt.Container, arg3: java.awt.Container): void
            public componentResized(arg0: java.awt.event.ComponentEvent): void
            public componentMoved(arg0: java.awt.event.ComponentEvent): void
            public componentShown(arg0: java.awt.event.ComponentEvent): void
            public componentHidden(arg0: java.awt.event.ComponentEvent): void
            public propertyChange(arg0: java.beans.PropertyChangeEvent): void
            public static class: java.lang.Class<any>
        }
    }
}