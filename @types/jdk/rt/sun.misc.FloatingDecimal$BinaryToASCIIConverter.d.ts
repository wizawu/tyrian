declare namespace sun {
    namespace misc {
        interface FloatingDecimal$BinaryToASCIIConverter {
            toJavaFormatString(): string
            appendTo(arg0: java.lang.Appendable): void
            getDecimalExponent(): int
            getDigits(arg0: char[]): int
            isNegative(): boolean
            isExceptional(): boolean
            digitsRoundedUp(): boolean
            decimalDigitsExact(): boolean
        }
    }
}