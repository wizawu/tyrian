declare namespace javax {
    namespace swing {
        class RepaintManager$PaintManager {
            protected repaintManager: javax.swing.RepaintManager
            public paint(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: int, arg6: int): boolean
            public copyArea(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: boolean): void
            public beginPaint(): void
            public endPaint(): void
            public show(arg0: java.awt.Container, arg1: int, arg2: int, arg3: int, arg4: int): boolean
            public doubleBufferingChanged(arg0: javax.swing.JRootPane | javax.swing.JRootPane$$Lambda): void
            protected paintDoubleBuffered(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.awt.Image, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: int, arg6: int): void
            protected repaintRoot(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
            protected isRepaintingRoot(): boolean
            protected dispose(): void
            public static class: java.lang.Class<any>
        }
    }
}