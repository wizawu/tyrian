declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkTableCell extends org.GNOME.Accessibility.AtkTable {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public getTable(): javax.accessibility.AccessibleTable
                public getPosition(arg0: int, arg1: int): boolean
                public getRowColumnSpan(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public getRowSpan(): int
                public getColumnSpan(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}