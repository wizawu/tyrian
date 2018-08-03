declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthMenuItemLayoutHelper extends sun.swing.MenuItemLayoutHelper {
                    public static readonly MAX_ACC_OR_ARROW_WIDTH: sun.swing.StringUIClientPropertyKey
                    public static readonly LTR_ALIGNMENT_1: sun.swing.MenuItemLayoutHelper$ColumnAlignment
                    public static readonly LTR_ALIGNMENT_2: sun.swing.MenuItemLayoutHelper$ColumnAlignment
                    public static readonly RTL_ALIGNMENT_1: sun.swing.MenuItemLayoutHelper$ColumnAlignment
                    public static readonly RTL_ALIGNMENT_2: sun.swing.MenuItemLayoutHelper$ColumnAlignment
                    public constructor(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.SynthContext, arg2: javax.swing.JMenuItem, arg3: javax.swing.Icon, arg4: javax.swing.Icon, arg5: java.awt.Rectangle, arg6: int, arg7: java.lang.String | string, arg8: boolean, arg9: boolean, arg10: java.lang.String | string)
                    protected calcWidthsAndHeights(): void
                    protected calcMaxWidths(): void
                    public getContext(): javax.swing.plaf.synth.SynthContext
                    public getAccContext(): javax.swing.plaf.synth.SynthContext
                    public getStyle(): javax.swing.plaf.synth.SynthStyle
                    public getAccStyle(): javax.swing.plaf.synth.SynthStyle
                    public getGraphicsUtils(): javax.swing.plaf.synth.SynthGraphicsUtils
                    public getAccGraphicsUtils(): javax.swing.plaf.synth.SynthGraphicsUtils
                    public alignAcceleratorText(): boolean
                    public getMaxAccOrArrowWidth(): int
                    protected prepareForLayout(arg0: sun.swing.MenuItemLayoutHelper$LayoutResult): void
                    public getLTRColumnAlignment(): sun.swing.MenuItemLayoutHelper$ColumnAlignment
                    public getRTLColumnAlignment(): sun.swing.MenuItemLayoutHelper$ColumnAlignment
                    protected layoutIconAndTextInLabelRect(arg0: sun.swing.MenuItemLayoutHelper$LayoutResult): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}