declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkSelection {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public static createAtkSelection(arg0: javax.accessibility.AccessibleContext): org.GNOME.Accessibility.AtkSelection
                public add_selection(arg0: int): boolean
                public clear_selection(): boolean
                public ref_selection(arg0: int): javax.accessibility.AccessibleContext
                public get_selection_count(): int
                public is_child_selected(arg0: int): boolean
                public remove_selection(arg0: int): boolean
                public select_all_selection(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}