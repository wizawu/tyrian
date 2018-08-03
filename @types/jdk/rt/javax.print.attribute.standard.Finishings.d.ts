declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class Finishings extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute , javax.print.attribute.PrintRequestAttribute , javax.print.attribute.PrintJobAttribute {
                    public static readonly NONE: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE: javax.print.attribute.standard.Finishings
                    public static readonly COVER: javax.print.attribute.standard.Finishings
                    public static readonly BIND: javax.print.attribute.standard.Finishings
                    public static readonly SADDLE_STITCH: javax.print.attribute.standard.Finishings
                    public static readonly EDGE_STITCH: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE_TOP_LEFT: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE_BOTTOM_LEFT: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE_TOP_RIGHT: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE_BOTTOM_RIGHT: javax.print.attribute.standard.Finishings
                    public static readonly EDGE_STITCH_LEFT: javax.print.attribute.standard.Finishings
                    public static readonly EDGE_STITCH_TOP: javax.print.attribute.standard.Finishings
                    public static readonly EDGE_STITCH_RIGHT: javax.print.attribute.standard.Finishings
                    public static readonly EDGE_STITCH_BOTTOM: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE_DUAL_LEFT: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE_DUAL_TOP: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE_DUAL_RIGHT: javax.print.attribute.standard.Finishings
                    public static readonly STAPLE_DUAL_BOTTOM: javax.print.attribute.standard.Finishings
                    protected constructor(arg0: int)
                    protected getStringTable(): java.lang.String[]
                    protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    protected getOffset(): int
                    public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
                    public getName(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}