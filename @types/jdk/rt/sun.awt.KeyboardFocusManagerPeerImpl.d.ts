declare namespace sun {
    namespace awt {
        abstract class KeyboardFocusManagerPeerImpl implements java.awt.peer.KeyboardFocusManagerPeer {
            public static readonly SNFH_FAILURE: int
            public static readonly SNFH_SUCCESS_HANDLED: int
            public static readonly SNFH_SUCCESS_PROCEED: int
            public constructor()
            public clearGlobalFocusOwner(arg0: java.awt.Window): void
            public static shouldFocusOnClick(arg0: java.awt.Component): boolean
            public static deliverFocus(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long, arg5: sun.awt.CausedFocusEvent$Cause, arg6: java.awt.Component): boolean
            public static requestFocusFor(arg0: java.awt.Component, arg1: sun.awt.CausedFocusEvent$Cause): boolean
            public static shouldNativelyFocusHeavyweight(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long, arg5: sun.awt.CausedFocusEvent$Cause): int
            public static removeLastFocusRequest(arg0: java.awt.Component): void
            public static processSynchronousLightweightTransfer(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long): boolean
            public static class: java.lang.Class<any>
        }
    }
}