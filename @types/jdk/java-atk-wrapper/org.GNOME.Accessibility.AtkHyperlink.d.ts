declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkHyperlink {
                public constructor(arg0: javax.accessibility.AccessibleHyperlink)
                public static createAtkHyperlink(arg0: javax.accessibility.AccessibleHyperlink): org.GNOME.Accessibility.AtkHyperlink
                public get_uri(arg0: int): string
                public get_object(arg0: int): javax.accessibility.AccessibleContext
                public get_end_index(): int
                public get_start_index(): int
                public is_valid(): boolean
                public get_n_anchors(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}