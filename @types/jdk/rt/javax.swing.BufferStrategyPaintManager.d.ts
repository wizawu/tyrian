declare namespace javax {
    namespace swing {
class BufferStrategyPaintManager extends javax.swing.RepaintManager$PaintManager {
    protected dispose(): void
    public show(arg0: java.awt.Container, arg1: int, arg2: int, arg3: int, arg4: int): boolean
    public paint(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: int, arg6: int): boolean
    public copyArea(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: boolean): void
    public beginPaint(): void
    public endPaint(): void
    public doubleBufferingChanged(arg0: javax.swing.JRootPane | javax.swing.JRootPane$$Lambda): void
    public static class: java.lang.Class<any>
}

    }
}