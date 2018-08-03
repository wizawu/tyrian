declare namespace sun {
    namespace misc {
        class ExtensionInfo {
            public static readonly COMPATIBLE: int
            public static readonly REQUIRE_SPECIFICATION_UPGRADE: int
            public static readonly REQUIRE_IMPLEMENTATION_UPGRADE: int
            public static readonly REQUIRE_VENDOR_SWITCH: int
            public static readonly INCOMPATIBLE: int
            public title: string
            public name: string
            public specVersion: string
            public specVendor: string
            public implementationVersion: string
            public vendor: string
            public vendorId: string
            public url: string
            public constructor()
            public constructor(arg0: java.lang.String | string, arg1: java.util.jar.Attributes)
            public isCompatibleWith(arg0: sun.misc.ExtensionInfo): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}