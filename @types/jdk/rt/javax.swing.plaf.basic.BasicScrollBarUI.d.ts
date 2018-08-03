declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicScrollBarUI extends javax.swing.plaf.ScrollBarUI implements java.awt.LayoutManager , javax.swing.SwingConstants {
                    protected minimumThumbSize: java.awt.Dimension
                    protected maximumThumbSize: java.awt.Dimension
                    protected thumbHighlightColor: java.awt.Color
                    protected thumbLightShadowColor: java.awt.Color
                    protected thumbDarkShadowColor: java.awt.Color
                    protected thumbColor: java.awt.Color
                    protected trackColor: java.awt.Color
                    protected trackHighlightColor: java.awt.Color
                    protected scrollbar: javax.swing.JScrollBar
                    protected incrButton: javax.swing.JButton
                    protected decrButton: javax.swing.JButton
                    protected isDragging: boolean
                    protected trackListener: javax.swing.plaf.basic.BasicScrollBarUI$TrackListener
                    protected buttonListener: javax.swing.plaf.basic.BasicScrollBarUI$ArrowButtonListener
                    protected modelListener: javax.swing.plaf.basic.BasicScrollBarUI$ModelListener
                    protected thumbRect: java.awt.Rectangle
                    protected trackRect: java.awt.Rectangle
                    protected trackHighlight: int
                    protected static readonly NO_HIGHLIGHT: int
                    protected static readonly DECREASE_HIGHLIGHT: int
                    protected static readonly INCREASE_HIGHLIGHT: int
                    protected scrollListener: javax.swing.plaf.basic.BasicScrollBarUI$ScrollListener
                    protected propertyChangeListener: java.beans.PropertyChangeListener
                    protected scrollTimer: javax.swing.Timer
                    protected scrollBarWidth: int
                    protected incrGap: int
                    protected decrGap: int
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    protected configureScrollBarColors(): void
                    public installUI(arg0: javax.swing.JComponent): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    protected installDefaults(): void
                    protected installComponents(): void
                    protected uninstallComponents(): void
                    protected installListeners(): void
                    protected installKeyboardActions(): void
                    protected uninstallKeyboardActions(): void
                    protected uninstallListeners(): void
                    protected uninstallDefaults(): void
                    protected createTrackListener(): javax.swing.plaf.basic.BasicScrollBarUI$TrackListener
                    protected createArrowButtonListener(): javax.swing.plaf.basic.BasicScrollBarUI$ArrowButtonListener
                    protected createModelListener(): javax.swing.plaf.basic.BasicScrollBarUI$ModelListener
                    protected createScrollListener(): javax.swing.plaf.basic.BasicScrollBarUI$ScrollListener
                    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                    protected setThumbRollover(arg0: boolean): void
                    public isThumbRollover(): boolean
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    protected createDecreaseButton(arg0: int): javax.swing.JButton
                    protected createIncreaseButton(arg0: int): javax.swing.JButton
                    protected paintDecreaseHighlight(arg0: java.awt.Graphics): void
                    protected paintIncreaseHighlight(arg0: java.awt.Graphics): void
                    protected paintTrack(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: java.awt.Rectangle): void
                    protected paintThumb(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: java.awt.Rectangle): void
                    protected getMinimumThumbSize(): java.awt.Dimension
                    protected getMaximumThumbSize(): java.awt.Dimension
                    public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
                    public removeLayoutComponent(arg0: java.awt.Component): void
                    public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
                    public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
                    protected layoutVScrollbar(arg0: javax.swing.JScrollBar): void
                    protected layoutHScrollbar(arg0: javax.swing.JScrollBar): void
                    public layoutContainer(arg0: java.awt.Container): void
                    protected setThumbBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
                    protected getThumbBounds(): java.awt.Rectangle
                    protected getTrackBounds(): java.awt.Rectangle
                    protected scrollByBlock(arg0: int): void
                    protected scrollByUnit(arg0: int): void
                    public getSupportsAbsolutePositioning(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}