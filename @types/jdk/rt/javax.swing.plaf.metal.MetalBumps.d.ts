declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                class MetalBumps implements javax.swing.Icon {
                    protected xBumps: int
                    protected yBumps: int
                    protected topColor: java.awt.Color
                    protected shadowColor: java.awt.Color
                    protected backColor: java.awt.Color
                    protected buffer: javax.swing.plaf.metal.BumpBuffer
                    public constructor(arg0: int, arg1: int, arg2: java.awt.Color, arg3: java.awt.Color, arg4: java.awt.Color)
                    public setBumpArea(arg0: java.awt.Dimension): void
                    public setBumpArea(arg0: int, arg1: int): void
                    public setBumpColors(arg0: java.awt.Color, arg1: java.awt.Color, arg2: java.awt.Color): void
                    public paintIcon(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int): void
                    public getIconWidth(): int
                    public getIconHeight(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}