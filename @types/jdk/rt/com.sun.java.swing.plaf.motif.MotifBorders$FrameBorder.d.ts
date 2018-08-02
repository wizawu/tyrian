declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace motif {
                        class MotifBorders$FrameBorder extends javax.swing.border.AbstractBorder implements javax.swing.plaf.UIResource {
                            public static BORDER_SIZE: int
                            public constructor(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda)
                            public setComponent(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                            public component(): javax.swing.JComponent
                            protected getFrameHighlight(): java.awt.Color
                            protected getFrameColor(): java.awt.Color
                            protected getFrameShadow(): java.awt.Color
                            public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
                            protected drawTopBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): boolean
                            protected drawLeftBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): boolean
                            protected drawRightBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): boolean
                            protected drawBottomBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): boolean
                            protected isActiveFrame(): boolean
                            public paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}