declare namespace javax {
    namespace swing {
class RepaintManager {
    public static currentManager(arg0: java.awt.Component): javax.swing.RepaintManager
    public static currentManager(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.RepaintManager
    public static setCurrentManager(arg0: javax.swing.RepaintManager): void
    public constructor()
    public addInvalidComponent(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public removeInvalidComponent(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public addDirtyRegion(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public addDirtyRegion(arg0: java.awt.Window | java.awt.Window$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public addDirtyRegion(arg0: java.applet.Applet, arg1: int, arg2: int, arg3: int, arg4: int): void
    public getDirtyRegion(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Rectangle
    public markCompletelyDirty(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public markCompletelyClean(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public isCompletelyDirty(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): boolean
    public validateInvalidComponents(): void
    public paintDirtyRegions(): void
    public toString(): string
    public getOffscreenBuffer(arg0: java.awt.Component, arg1: int, arg2: int): java.awt.Image
    public getVolatileOffscreenBuffer(arg0: java.awt.Component, arg1: int, arg2: int): java.awt.Image
    public setDoubleBufferMaximumSize(arg0: java.awt.Dimension): void
    public getDoubleBufferMaximumSize(): java.awt.Dimension
    public setDoubleBufferingEnabled(arg0: boolean): void
    public isDoubleBufferingEnabled(): boolean
    public static class: java.lang.Class<any>
}

    }
}