declare namespace java {
  namespace awt {
    namespace font {
      class TextHitInfo {
        public getCharIndex(): number
        public isLeadingEdge(): boolean
        public getInsertionIndex(): number
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
        public equals(arg0: java.awt.font.TextHitInfo): boolean
        public toString(): java.lang.String
        public static leading(arg0: number | java.lang.Integer): java.awt.font.TextHitInfo
        public static trailing(arg0: number | java.lang.Integer): java.awt.font.TextHitInfo
        public static beforeOffset(arg0: number | java.lang.Integer): java.awt.font.TextHitInfo
        public static afterOffset(arg0: number | java.lang.Integer): java.awt.font.TextHitInfo
        public getOtherHit(): java.awt.font.TextHitInfo
        public getOffsetHit(arg0: number | java.lang.Integer): java.awt.font.TextHitInfo
      }
    }
  }
}
