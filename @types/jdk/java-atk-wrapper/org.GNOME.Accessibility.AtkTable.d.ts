declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkTable {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public static createAtkTable(arg0: javax.accessibility.AccessibleContext): org.GNOME.Accessibility.AtkTable
                public ref_at(arg0: int, arg1: int): javax.accessibility.AccessibleContext
                public get_index_at(arg0: int, arg1: int): int
                public get_column_at_index(arg0: int): int
                public get_row_at_index(arg0: int): int
                public get_n_columns(): int
                public get_n_rows(): int
                public get_column_extent_at(arg0: int, arg1: int): int
                public get_row_extent_at(arg0: int, arg1: int): int
                public get_caption(): javax.accessibility.AccessibleContext
                public setCaption(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                public get_column_description(arg0: int): string
                public setColumnDescription(arg0: int, arg1: java.lang.String | string): void
                public get_row_description(arg0: int): string
                public setRowDescription(arg0: int, arg1: java.lang.String | string): void
                public get_column_header(arg0: int): javax.accessibility.AccessibleContext
                public get_row_header(arg0: int): javax.accessibility.AccessibleContext
                public get_summary(): javax.accessibility.AccessibleContext
                public setSummary(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                public get_selected_columns(): int[]
                public get_selected_rows(): int[]
                public is_column_selected(arg0: int): boolean
                public is_row_selected(arg0: int): boolean
                public is_selected(arg0: int, arg1: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}