declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                class MetalSliderUI extends javax.swing.plaf.basic.BasicSliderUI {
                    protected TICK_BUFFER: int
                    protected filledSlider: boolean
                    protected static thumbColor: java.awt.Color
                    protected static highlightColor: java.awt.Color
                    protected static darkShadowColor: java.awt.Color
                    protected static trackWidth: int
                    protected static tickLength: int
                    protected static horizThumbIcon: javax.swing.Icon
                    protected static vertThumbIcon: javax.swing.Icon
                    protected SLIDER_FILL: string
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public constructor()
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected createPropertyChangeListener(arg0: javax.swing.JSlider | javax.swing.JSlider$$Lambda): java.beans.PropertyChangeListener
                    public paintThumb(arg0: java.awt.Graphics): void
                    public paintTrack(arg0: java.awt.Graphics): void
                    public paintFocus(arg0: java.awt.Graphics): void
                    protected getThumbSize(): java.awt.Dimension
                    public getTickLength(): int
                    protected getTrackWidth(): int
                    protected getTrackLength(): int
                    protected getThumbOverhang(): int
                    protected scrollDueToClickInTrack(arg0: int): void
                    protected paintMinorTickForHorizSlider(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
                    protected paintMajorTickForHorizSlider(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
                    protected paintMinorTickForVertSlider(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
                    protected paintMajorTickForVertSlider(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}