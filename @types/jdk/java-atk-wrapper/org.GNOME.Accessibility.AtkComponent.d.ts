declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkComponent {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public contains(arg0: int, arg1: int, arg2: int): boolean
                public get_accessible_at_point(arg0: int, arg1: int, arg2: int): javax.accessibility.AccessibleContext
                public grab_focus(): boolean
                public get_position(arg0: int): java.awt.Point
                public set_extents(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): java.awt.Rectangle
                public get_extents(): java.awt.Rectangle
                public get_layer(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}