declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace motif {
                        class MotifInternalFrameTitlePane extends javax.swing.plaf.basic.BasicInternalFrameTitlePane implements java.awt.LayoutManager , java.awt.event.ActionListener , java.beans.PropertyChangeListener {
                            public static BUTTON_SIZE: int
                            public constructor(arg0: javax.swing.JInternalFrame)
                            protected installDefaults(): void
                            protected uninstallListeners(): void
                            protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                            protected createLayout(): java.awt.LayoutManager
                            protected assembleSystemMenu(): void
                            protected createButtons(): void
                            protected addSubComponents(): void
                            public paintComponent(arg0: java.awt.Graphics): void
                            public actionPerformed(arg0: java.awt.event.ActionEvent): void
                            public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                            public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
                            public removeLayoutComponent(arg0: java.awt.Component): void
                            public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
                            public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
                            public layoutContainer(arg0: java.awt.Container): void
                            protected showSystemMenu(): void
                            protected hideSystemMenu(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}