declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicSliderUI extends javax.swing.plaf.SliderUI {
                    public static POSITIVE_SCROLL: int
                    public static NEGATIVE_SCROLL: int
                    public static MIN_SCROLL: int
                    public static MAX_SCROLL: int
                    protected scrollTimer: javax.swing.Timer
                    protected slider: javax.swing.JSlider
                    protected focusInsets: java.awt.Insets
                    protected insetCache: java.awt.Insets
                    protected leftToRightCache: boolean
                    protected focusRect: java.awt.Rectangle
                    protected contentRect: java.awt.Rectangle
                    protected labelRect: java.awt.Rectangle
                    protected tickRect: java.awt.Rectangle
                    protected trackRect: java.awt.Rectangle
                    protected thumbRect: java.awt.Rectangle
                    protected trackBuffer: int
                    protected trackListener: javax.swing.plaf.basic.BasicSliderUI$TrackListener
                    protected changeListener: javax.swing.event.ChangeListener
                    protected componentListener: java.awt.event.ComponentListener
                    protected focusListener: java.awt.event.FocusListener
                    protected scrollListener: javax.swing.plaf.basic.BasicSliderUI$ScrollListener
                    protected propertyChangeListener: java.beans.PropertyChangeListener
                    protected getShadowColor(): java.awt.Color
                    protected getHighlightColor(): java.awt.Color
                    protected getFocusColor(): java.awt.Color
                    protected isDragging(): boolean
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public constructor(arg0: javax.swing.JSlider)
                    public installUI(arg0: javax.swing.JComponent): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    protected installDefaults(arg0: javax.swing.JSlider): void
                    protected uninstallDefaults(arg0: javax.swing.JSlider): void
                    protected createTrackListener(arg0: javax.swing.JSlider): javax.swing.plaf.basic.BasicSliderUI$TrackListener
                    protected createChangeListener(arg0: javax.swing.JSlider): javax.swing.event.ChangeListener
                    protected createComponentListener(arg0: javax.swing.JSlider): java.awt.event.ComponentListener
                    protected createFocusListener(arg0: javax.swing.JSlider): java.awt.event.FocusListener
                    protected createScrollListener(arg0: javax.swing.JSlider): javax.swing.plaf.basic.BasicSliderUI$ScrollListener
                    protected createPropertyChangeListener(arg0: javax.swing.JSlider): java.beans.PropertyChangeListener
                    protected installListeners(arg0: javax.swing.JSlider): void
                    protected uninstallListeners(arg0: javax.swing.JSlider): void
                    protected installKeyboardActions(arg0: javax.swing.JSlider): void
                    protected uninstallKeyboardActions(arg0: javax.swing.JSlider): void
                    public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
                    public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
                    protected labelsHaveSameBaselines(): boolean
                    public getPreferredHorizontalSize(): java.awt.Dimension
                    public getPreferredVerticalSize(): java.awt.Dimension
                    public getMinimumHorizontalSize(): java.awt.Dimension
                    public getMinimumVerticalSize(): java.awt.Dimension
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    protected calculateGeometry(): void
                    protected calculateFocusRect(): void
                    protected calculateThumbSize(): void
                    protected calculateContentRect(): void
                    protected calculateThumbLocation(): void
                    protected calculateTrackBuffer(): void
                    protected calculateTrackRect(): void
                    protected getTickLength(): int
                    protected calculateTickRect(): void
                    protected calculateLabelRect(): void
                    protected getThumbSize(): java.awt.Dimension
                    protected getWidthOfWidestLabel(): int
                    protected getHeightOfTallestLabel(): int
                    protected getWidthOfHighValueLabel(): int
                    protected getWidthOfLowValueLabel(): int
                    protected getHeightOfHighValueLabel(): int
                    protected getHeightOfLowValueLabel(): int
                    protected drawInverted(): boolean
                    protected getHighestValue(): java.lang.Integer
                    protected getLowestValue(): java.lang.Integer
                    protected getLowestValueLabel(): java.awt.Component
                    protected getHighestValueLabel(): java.awt.Component
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    protected recalculateIfInsetsChanged(): void
                    protected recalculateIfOrientationChanged(): void
                    public paintFocus(arg0: java.awt.Graphics): void
                    public paintTrack(arg0: java.awt.Graphics): void
                    public paintTicks(arg0: java.awt.Graphics): void
                    protected paintMinorTickForHorizSlider(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
                    protected paintMajorTickForHorizSlider(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
                    protected paintMinorTickForVertSlider(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
                    protected paintMajorTickForVertSlider(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
                    public paintLabels(arg0: java.awt.Graphics): void
                    protected paintHorizontalLabel(arg0: java.awt.Graphics, arg1: int, arg2: java.awt.Component): void
                    protected paintVerticalLabel(arg0: java.awt.Graphics, arg1: int, arg2: java.awt.Component): void
                    public paintThumb(arg0: java.awt.Graphics): void
                    public setThumbLocation(arg0: int, arg1: int): void
                    public scrollByBlock(arg0: int): void
                    public scrollByUnit(arg0: int): void
                    protected scrollDueToClickInTrack(arg0: int): void
                    protected xPositionForValue(arg0: int): int
                    protected yPositionForValue(arg0: int): int
                    protected yPositionForValue(arg0: int, arg1: int, arg2: int): int
                    public valueForYPosition(arg0: int): int
                    public valueForXPosition(arg0: int): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}