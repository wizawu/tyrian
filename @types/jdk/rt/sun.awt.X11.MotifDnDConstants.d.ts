declare namespace sun {
    namespace awt {
        namespace X11 {
            class MotifDnDConstants {
                public static readonly MOTIF_DND_PROTOCOL_VERSION: byte
                public static readonly MOTIF_PREFER_PREREGISTER_STYLE: int
                public static readonly MOTIF_PREFER_DYNAMIC_STYLE: int
                public static readonly MOTIF_DYNAMIC_STYLE: int
                public static readonly MOTIF_PREFER_RECEIVER_STYLE: int
                public static readonly MOTIF_INITIATOR_INFO_SIZE: int
                public static readonly MOTIF_RECEIVER_INFO_SIZE: int
                public static readonly MOTIF_MESSAGE_REASON_MASK: byte
                public static readonly MOTIF_MESSAGE_SENDER_MASK: byte
                public static readonly MOTIF_MESSAGE_FROM_RECEIVER: byte
                public static readonly MOTIF_MESSAGE_FROM_INITIATOR: byte
                public static readonly MOTIF_DND_ACTION_MASK: int
                public static readonly MOTIF_DND_ACTION_SHIFT: int
                public static readonly MOTIF_DND_STATUS_MASK: int
                public static readonly MOTIF_DND_STATUS_SHIFT: int
                public static readonly MOTIF_DND_ACTIONS_MASK: int
                public static readonly MOTIF_DND_ACTIONS_SHIFT: int
                public static readonly TOP_LEVEL_ENTER: byte
                public static readonly TOP_LEVEL_LEAVE: byte
                public static readonly DRAG_MOTION: byte
                public static readonly DROP_SITE_ENTER: byte
                public static readonly DROP_SITE_LEAVE: byte
                public static readonly DROP_START: byte
                public static readonly DROP_FINISH: byte
                public static readonly DRAG_DROP_FINISH: byte
                public static readonly OPERATION_CHANGED: byte
                public static readonly MOTIF_DND_NOOP: int
                public static readonly MOTIF_DND_MOVE: int
                public static readonly MOTIF_DND_COPY: int
                public static readonly MOTIF_DND_LINK: int
                public static readonly MOTIF_NO_DROP_SITE: byte
                public static readonly MOTIF_INVALID_DROP_SITE: byte
                public static readonly MOTIF_VALID_DROP_SITE: byte
                public static getMotifActionsForJavaActions(arg0: int): int
                public static getJavaActionsForMotifActions(arg0: int): int
                public static class: java.lang.Class<any>
            }
        }
    }
}