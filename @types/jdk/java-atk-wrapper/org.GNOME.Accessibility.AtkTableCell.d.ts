declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkTableCell {
                public row: int
                public rowSpan: int
                public column: int
                public columnSpan: int
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public static createAtkTableCell(arg0: javax.accessibility.AccessibleContext): org.GNOME.Accessibility.AtkTableCell
                public getTable(): javax.accessibility.AccessibleTable
                public getAccessibleColumnHeader(): javax.accessibility.AccessibleContext[]
                public getAccessibleRowHeader(): javax.accessibility.AccessibleContext[]
                public static class: java.lang.Class<any>
            }
        }
    }
}