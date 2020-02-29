declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkText {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public get_text(arg0: int, arg1: int): string
                public get_character_at_offset(arg0: int): char
                public get_text_at_offset(arg0: int, arg1: int): org.GNOME.Accessibility.AtkText$StringSequence
                public get_caret_offset(): int
                public get_character_extents(arg0: int, arg1: int): java.awt.Rectangle
                public get_character_count(): int
                public get_offset_at_point(arg0: int, arg1: int, arg2: int): int
                public get_range_extents(arg0: int, arg1: int, arg2: int): java.awt.Rectangle
                public get_n_selections(): int
                public get_selection(): org.GNOME.Accessibility.AtkText$StringSequence
                public add_selection(arg0: int, arg1: int): boolean
                public remove_selection(arg0: int): boolean
                public set_selection(arg0: int, arg1: int, arg2: int): boolean
                public set_caret_offset(arg0: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}