declare namespace java {
    namespace awt {
        namespace font {
            class TextHitInfo {
                public getCharIndex(): int
                public isLeadingEdge(): boolean
                public getInsertionIndex(): int
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: java.awt.font.TextHitInfo): boolean
                public toString(): string
                public static leading(arg0: int): java.awt.font.TextHitInfo
                public static trailing(arg0: int): java.awt.font.TextHitInfo
                public static beforeOffset(arg0: int): java.awt.font.TextHitInfo
                public static afterOffset(arg0: int): java.awt.font.TextHitInfo
                public getOtherHit(): java.awt.font.TextHitInfo
                public getOffsetHit(arg0: int): java.awt.font.TextHitInfo
                public static class: java.lang.Class<any>
            }
        }
    }
}