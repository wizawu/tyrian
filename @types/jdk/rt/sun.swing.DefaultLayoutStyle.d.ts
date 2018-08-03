declare namespace sun {
    namespace swing {
        class DefaultLayoutStyle extends javax.swing.LayoutStyle {
            public constructor()
            public static getInstance(): javax.swing.LayoutStyle
            public getPreferredGap(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent, arg2: javax.swing.LayoutStyle$ComponentPlacement, arg3: int, arg4: java.awt.Container): int
            public getContainerGap(arg0: javax.swing.JComponent, arg1: int, arg2: java.awt.Container): int
            protected isLabelAndNonlabel(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent, arg2: int): boolean
            protected getButtonGap(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent, arg2: int, arg3: int): int
            protected getButtonGap(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
            public getButtonGap(arg0: javax.swing.JComponent, arg1: int): int
            protected flipDirection(arg0: int): int
            protected getIndent(arg0: javax.swing.JComponent, arg1: int): int
            public static class: java.lang.Class<any>
        }
    }
}