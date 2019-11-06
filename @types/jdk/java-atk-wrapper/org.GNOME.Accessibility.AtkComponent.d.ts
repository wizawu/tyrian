declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkComponent {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public static createAtkComponent(arg0: javax.accessibility.AccessibleContext): org.GNOME.Accessibility.AtkComponent
                public static getWindowLocation(arg0: javax.accessibility.AccessibleContext): java.awt.Point
                public static getComponentOrigin(arg0: javax.accessibility.AccessibleContext, arg1: javax.accessibility.AccessibleComponent, arg2: int): java.awt.Point
                public static getParentOrigin(arg0: javax.accessibility.AccessibleContext, arg1: javax.accessibility.AccessibleComponent, arg2: int): java.awt.Point
                public contains(arg0: int, arg1: int, arg2: int): boolean
                public get_accessible_at_point(arg0: int, arg1: int, arg2: int): javax.accessibility.AccessibleContext
                public grab_focus(): boolean
                public set_extents(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): boolean
                public get_extents(arg0: int): java.awt.Rectangle
                public get_layer(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}